/**
 * Pure computation of the chat rows a rewind hides from the rendered
 * transcript. Extracted from the client plugin (`src/client/index.ts`) so the
 * multi-rewind cut logic stays unit-testable without a DOM.
 *
 * @module dsh-rewind/client/hidden
 */

import type { ChatConversationViewNode, CommandNode } from '@deepseek-ai/dsh-client-runtime/client'

/** Minimal chat snapshot reader the hiding logic needs. */
export interface HiddenChat {
  readonly order: readonly string[]
  readonly nodes: { get(key: string): ChatConversationViewNode | undefined }
}

/**
 * Reader for one session's live chat snapshot. The dual channel hides the
 * harness split behind SiriLee/dsh-rewind#7: rc.2 serves the chat from the
 * session face snapshot, while 0.1.2-alpha.1+ serves it from the
 * `uiConversation` service's named "chat" view (contributed by
 * dsh-client-ui-chat through the uiSession slot hook).
 */
export type ChatOf = (
  session: { readonly sessionId: string; getSnapshot(): { chat?: unknown } } | undefined,
) => HiddenChat | undefined

/**
 * Resolve the chat snapshot across the two harness channels: the session-face
 * snapshot first (rc.2 — on alpha.1+ the face no longer carries `chat`, so the
 * field reads `undefined`), then the `uiConversation` "chat" view. The view's
 * `getSnapshot()` returns undefined until the named view is registered, so
 * both channels missing degrades to `undefined` (no targets, no hiding —
 * never a crash).
 */
export function chatSnapshotOf(
  face: { getSnapshot(): { chat?: unknown } } | undefined,
  chatView: { getSnapshot(): unknown } | undefined,
): HiddenChat | undefined {
  const legacy = face?.getSnapshot().chat as HiddenChat | undefined
  if (legacy !== undefined) return legacy
  return (chatView?.getSnapshot() ?? undefined) as HiddenChat | undefined
}

/**
 * The plain text of the human message at `seq` in the chat snapshot, for
 * filling the composer after a withdraw. Accepts BOTH `user` and `steering`
 * nodes: a plan-mode (`/plan <text>`) input is delivered through the agent
 * inbox next-step and claimed, so it renders as `steering`, and its text must
 * still return to the composer (`portals.tsx` `runRewindAndFill`) — the old
 * `user`-only read silently left it empty. State absent → undefined; a message
 * with no text blocks → ''. Same text-blocks join the candidate side uses.
 */
export function messageTextAt(chat: HiddenChat | undefined, seq: number): string | undefined {
  if (chat === undefined) return undefined
  for (const key of chat.order) {
    const node = chat.nodes.get(key)
    if (node === undefined || (node.kind !== 'user' && node.kind !== 'steering')) continue
    const data = node.data as {
      seq?: number
      content?: readonly { type?: string; text?: string }[]
    }
    if (data.seq === seq) {
      return data.content
        ?.map(block => (block.type === 'text' && typeof block.text === 'string' ? block.text : ''))
        .join('')
    }
  }
  return undefined
}

/**
 * Extract the rewind target seq from a `/rewind` command's structured `args`
 * (e.g. `@5 chat`, `preview @5 both`). Locale-independent — never parses the
 * host's human outcome copy.
 */
export function targetSeqOfArgs(args: string | null | undefined): number | undefined {
  if (args === undefined || args === null) return undefined
  const match = args.match(/@(\d+)/)
  return match !== null ? Number(match[1]) : undefined
}

/**
 * True when a `/rewind` command node is an EXECUTED rewind for `seq` — the
 * admission form the popover drives (`@<seq> chat` / `both`) that settled
 * with a marker-carrying success outcome. The composer refill waits for
 * exactly this node after the user confirms, so a history-loaded command can
 * never trigger a fill.
 */
export function isExecutedRewindCommand(node: CommandNode, seq: number): boolean {
  if (node.name !== 'rewind' || node.outcome?.kind !== 'success') return false
  // A success WITHOUT a marker rewound nothing (an impact preview, or the
  // step-2 "choose a mode" hint from the now-blocked manual text flow).
  if (node.outcome.sourceEventSeq === undefined) return false
  const args = node.args ?? ''
  return new RegExp(`(?:^|\\s)@${seq}(?:\\s|$)`).test(args)
}

/**
 * Whether a preview outcome reports tracked file changes — the availability
 * of the "rewind conversation and code" option (Claude Code hides the
 * code-restore options when the checkpoint has no tracked changes).
 *
 * Reads ONLY the machine-readable `impact=<n>` trailer the host appends to
 * preview text. Older host output without the trailer is treated as having no
 * changes (never guesses from human copy). Unknown/absent text degrades to
 * always-show so a working option is never hidden on a failed probe.
 */
export function hasFileImpact(text: string | undefined): boolean {
  if (text === undefined) return true
  const match = text.match(/impact=(\d+)/)
  if (match !== null) return Number(match[1]) > 0
  return false
}

/** True when a `/rewind` command node is an impact preview — the internal probe
 * the popover runs (`/rewind preview @seq both`) to fetch the restore/delete
 * list. Previews never surface in the transcript (their result is shown in the
 * popover), so their flow node is hidden in every state. */
function isPreviewCommand(command: CommandNode): boolean {
  return (command.args ?? '').includes('preview')
}

/**
 * True when a `/rewind` command node is the internal candidate-list probe
 * (`/rewind __candidates`) the popupSelect runs to fetch the FULL candidate
 * list from the host. Like previews, its flow node never surfaces in the
 * transcript — it only feeds the popup — so it is hidden in every state.
 */
export function isCandidateCommand(command: CommandNode): boolean {
  return (command.args ?? '').includes('__candidates')
}

/**
 * Chat-flow kinds that visually open a turn but whose `anchorSeq` is the
 * `turn/start` seq — BEFORE the rewind target user message. A `[target,
 * marker]` span therefore misses them, and after rewind they stack as leftover
 * 「系统提示词」 chips above the resent bubble (the model request is already
 * cut; this is display residue).
 */
const TURN_PREFIX_KINDS = new Set(['system-prompt', 'turn-process'])

function inAnySpan(spans: readonly { start: number; end: number }[], seq: number): boolean {
  return spans.some(span => seq >= span.start && seq <= span.end)
}

/**
 * Hide turn-prefix chrome whose seq sits outside `[target, marker]`.
 *
 * Two independent catches, both required:
 * - Gap: prefix nodes whose seq is after the previous still-on-surface human
 *   message in this snapshot and before this rewind's target (`turn/start` of
 *   the withdrawn turn). Skipped when that previous human is not in the
 *   snapshot, so a windowed tail cannot hide the session's initial prompt.
 * - Adjacent walk: prefix nodes immediately before a hidden human in chat
 *   `order` (covers an assembler that reuses or reorders prefix anchors).
 */
function hideTurnPrefixChrome(
  snap: HiddenChat,
  spans: readonly { start: number; end: number }[],
  hidden: Set<number>,
): void {
  if (spans.length === 0) return

  const humans: number[] = []
  for (const key of snap.order) {
    const node = snap.nodes.get(key)
    if (node === undefined) continue
    if (node.kind === 'user' || node.kind === 'steering') humans.push(node.anchorSeq)
  }
  humans.sort((a, b) => a - b)
  const surviving = humans.filter(seq => !inAnySpan(spans, seq))

  for (const span of spans) {
    let previous = Number.NEGATIVE_INFINITY
    for (const seq of surviving) {
      if (seq < span.start) previous = seq
      else break
    }
    // Only use the seq gap when the previous surviving human is in this
    // snapshot. A windowed tail that omitted earlier users would otherwise
    // treat `-Infinity` as the left edge and hide the session's initial
    // system-prompt chip.
    if (previous === Number.NEGATIVE_INFINITY) continue
    for (const key of snap.order) {
      const node = snap.nodes.get(key)
      if (node === undefined || !TURN_PREFIX_KINDS.has(node.kind)) continue
      const anchor = node.anchorSeq
      if (anchor > previous && anchor < span.start) hidden.add(anchor)
    }
  }

  for (let i = 0; i < snap.order.length; i++) {
    const node = snap.nodes.get(snap.order[i]!)
    if (node === undefined) continue
    if (node.kind !== 'user' && node.kind !== 'steering') continue
    if (!hidden.has(node.anchorSeq)) continue
    for (let j = i - 1; j >= 0; j--) {
      const previous = snap.nodes.get(snap.order[j]!)
      if (previous === undefined) break
      if (previous.kind === 'user' || previous.kind === 'steering') break
      if (TURN_PREFIX_KINDS.has(previous.kind)) {
        hidden.add(previous.anchorSeq)
        continue
      }
      break
    }
  }
}

/**
 * Anchor seqs that must be hidden from the rendered transcript so the user
 * sees the conversation as the agent sees it: every impact-preview flow node
 * (pending, succeeded, or errored — it only exists to feed the popover) and
 * every SUCCESSFUL executed `/rewind` command row, plus every message
 * withdrawn by a rewind — the target message itself, everything after it, and
 * the (empty, unrendered) marker — and the turn-prefix chrome (`system-prompt`
 * / `turn-process`) whose `turn/start` seq sits before that target.
 *
 * Each executed rewind cuts ONE span `[target, marker]`: the target message
 * and everything after it, up to the marker appended at rewind time. Spans are
 * kept SEPARATE (never collapsed to a single `[min target, max marker]`)
 * because a later rewind to a LATER point leaves a visible gap of new traffic
 * between the earlier marker and the later target — collapsing the spans would
 * hide that still-on-surface gap. Endpoints come from the command nodes:
 * `sourceEventSeq` is the marker's log seq, and the outcome text carries the
 * target seq.
 */
export function hiddenSeqsOf(snap: HiddenChat): Set<number> {
  const hidden = new Set<number>()
  const spans: Array<{ start: number; end: number }> = []
  for (const key of snap.order) {
    const node = snap.nodes.get(key)
    if (node === undefined || node.kind !== 'command') continue
    const command = node.data as CommandNode
    if (command.name !== 'rewind') continue
    // An internal probe (preview or candidate-list fetch) is hidden in every
    // state — pending, succeeded, or errored — so no row flashes in the
    // transcript while the popover/popup shows its result. Probes never
    // contribute to the cut range (nothing was actually rewound).
    if (isPreviewCommand(command) || isCandidateCommand(command)) {
      hidden.add(command.seq)
      continue
    }
    // Only SUCCESSFUL executed rewinds are hidden (their result is noise once
    // the conversation is rewound). A failed executed rewind must stay visible
    // so the user sees the error instead of silently missing the rewind.
    if (command.outcome?.kind !== 'success') continue
    // A success WITHOUT a marker rewound nothing (the step-2 "choose a mode"
    // hint from the now-blocked manual text flow): leave its row visible and
    // do not extend the cut range.
    const marker = command.outcome.sourceEventSeq
    if (marker === undefined) continue
    hidden.add(command.seq)
    const target = targetSeqOfArgs(command.args)
    if (target !== undefined) {
      spans.push({ start: target, end: marker })
    }
  }
  for (const key of snap.order) {
    const node = snap.nodes.get(key)
    if (node === undefined) continue
    const anchor = node.anchorSeq
    if (spans.some(span => anchor >= span.start && anchor <= span.end)) {
      hidden.add(anchor)
    }
  }
  hideTurnPrefixChrome(snap, spans, hidden)
  return hidden
}

/**
 * 1-based turn indexes of withdrawn user/steering rows. Derived from the chat
 * snapshot so the trajectory rail can hide `Turn N` even when the chat seats
 * are unmounted (the user is on the Trajectory tab).
 *
 * Reads `location.turn.turn` structurally — the field exists on alpha.1+
 * conversation nodes; absent location (rc.2, tests) yields an empty set and
 * the DOM `data-chat-turn` fallback in `portals.tsx` still applies.
 */
export function hiddenTurnsOf(snap: HiddenChat, hiddenSeqs: ReadonlySet<number>): Set<number> {
  const turns = new Set<number>()
  for (const key of snap.order) {
    const node = snap.nodes.get(key)
    if (node === undefined) continue
    if (node.kind !== 'user' && node.kind !== 'steering') continue
    if (!hiddenSeqs.has(node.anchorSeq)) continue
    const location = (node as { location?: { turn?: { turn?: number } } }).location
    const turn = location?.turn?.turn
    if (typeof turn === 'number' && Number.isSafeInteger(turn) && turn >= 1) turns.add(turn)
  }
  return turns
}
