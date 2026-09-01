window.__ModuleLoader__.load({
	id: "dsh-system-prompt",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		let _deepseek_ai_dsh_client_store = require("@deepseek-ai/dsh-client-store");
		let react = require("react");
		let react_dom = require("react-dom");
		//#region \0dsh-css:D:\AI\dsh-system-prompt\src\client\SystemPromptSection.module.css.mjs
		const css = ".wW440W_section{max-width:720px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:12px;display:flex}.wW440W_title{margin:0;font-size:18px;font-weight:600}.wW440W_intro{color:var(--dsw-alias-label-tertiary);margin:0;font-size:13px;line-height:1.5}.wW440W_status{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:1.5}.wW440W_head{align-items:center;gap:8px;display:flex}.wW440W_label{min-width:0;color:var(--dsw-alias-label-primary);flex:1;font-size:13px;font-weight:500;line-height:1.5}.wW440W_badges{align-items:center;gap:8px;display:inline-flex}.wW440W_badge{white-space:nowrap;background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-secondary);border-radius:999px;padding:1px 8px;font-size:11px;font-weight:500;line-height:17px}.wW440W_reset{font:inherit;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;padding:0;font-size:12px;line-height:1.5}.wW440W_reset:hover:not(:disabled){color:var(--dsw-alias-label-primary)}.wW440W_reset:disabled{cursor:default}.wW440W_textarea{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);width:100%;min-height:240px;color:var(--dsw-alias-label-primary);font:inherit;font-family:var(--dsw-font-mono,ui-monospace, SFMono-Regular, Menlo, monospace);resize:vertical;border-radius:10px;padding:12px;font-size:13px;line-height:1.5}.wW440W_textarea:focus-visible{border-color:var(--dsw-alias-brand-primary);outline:none}.wW440W_textarea:disabled{color:var(--dsw-alias-label-tertiary);cursor:default}.wW440W_hint{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:1.5}.wW440W_footer{justify-content:flex-end;align-items:center;gap:8px;display:flex}.wW440W_failed{min-width:0;color:var(--dsw-alias-label-error);flex:1;margin:0;font-size:12px;line-height:1.5}";
		const tagId = "dsh-system-prompt/SystemPromptSection.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-system-prompt";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var SystemPromptSection_module_css_default = {
			"textarea": "wW440W_textarea",
			"title": "wW440W_title",
			"status": "wW440W_status",
			"badge": "wW440W_badge",
			"intro": "wW440W_intro",
			"hint": "wW440W_hint",
			"footer": "wW440W_footer",
			"failed": "wW440W_failed",
			"reset": "wW440W_reset",
			"section": "wW440W_section",
			"badges": "wW440W_badges",
			"head": "wW440W_head",
			"label": "wW440W_label"
		};
		//#endregion
		//#region src/client/SystemPromptSection.tsx
		/**
		* Render the system-prompt settings page.
		* @param props - composed slot props.
		* @returns the section element tree.
		*/
		function SystemPromptSection(props) {
			const { useSystemPromptSection, t, edit, reset, save, discard } = props;
			const state = useSystemPromptSection((snapshot) => snapshot);
			const disabled = !state.writable || !state.available || state.saving;
			const saveBlocked = disabled || !state.dirty;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: SystemPromptSection_module_css_default.section,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
						className: SystemPromptSection_module_css_default.title,
						children: t("title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: SystemPromptSection_module_css_default.intro,
						children: t("intro")
					}),
					!state.available ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: SystemPromptSection_module_css_default.status,
						role: "status",
						children: t("unavailable")
					}) : !state.writable ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: SystemPromptSection_module_css_default.status,
						role: "status",
						children: t("readOnly")
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: SystemPromptSection_module_css_default.head,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
							className: SystemPromptSection_module_css_default.label,
							htmlFor: "dsh-system-prompt-persona",
							children: t("label")
						}), state.overridden ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: SystemPromptSection_module_css_default.badges,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: SystemPromptSection_module_css_default.badge,
								children: t("overridden")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: SystemPromptSection_module_css_default.reset,
								disabled,
								onClick: reset,
								children: t("reset")
							})]
						}) : null]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
						id: "dsh-system-prompt-persona",
						className: SystemPromptSection_module_css_default.textarea,
						value: state.text,
						disabled,
						rows: 16,
						spellCheck: false,
						onChange: (event) => {
							edit(event.target.value);
						}
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: SystemPromptSection_module_css_default.hint,
						children: t("hint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: SystemPromptSection_module_css_default.footer,
						children: [
							state.failed ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: SystemPromptSection_module_css_default.failed,
								role: "status",
								children: t("saveFailed")
							}) : null,
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								size: "sm",
								disabled: !state.dirty || state.saving || !state.available,
								onClick: discard,
								children: t("discard")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "primary",
								size: "sm",
								disabled: saveBlocked,
								onClick: save,
								children: t(state.saving ? "saving" : "save")
							})
						]
					})
				]
			});
		}
		//#endregion
		//#region src/client/persona-form.ts
		/**
		* Staged editor over the `system-prompt` settings namespace.
		*
		* Empty draft text is a real override (`set` of `''`), not a clear. Reset
		* stages an unset so saving restores composition and each preset identity.
		*/
		/**
		* Namespace of the system-prompt user-owned settings. Spelled here rather than
		* imported: a client package must not depend on a Host package.
		*/
		const SYSTEM_PROMPT_SETTINGS_NS = "system-prompt";
		/**
		* Stages persona edits over the system-prompt namespace and writes them on save.
		*/
		var PersonaForm = class {
			scope;
			/** Page snapshot the section renderer subscribes to. */
			store;
			staged;
			saving = false;
			failed = false;
			/**
			* @param scope - the bound settings scope for `system-prompt`.
			*/
			constructor(scope) {
				this.scope = scope;
				this.store = (0, _deepseek_ai_dsh_client_store.createSnapshotStore)(this.project());
				scope.subscribe(() => {
					this.publish();
				});
			}
			/**
			* Build the edit, reset, save, and discard actions bound to this form.
			* @returns the actions the section's slot entry injects.
			*/
			actions() {
				return {
					edit: (text) => {
						this.stage({
							text,
							clear: false
						});
					},
					reset: () => {
						this.stage({
							text: this.baseText(),
							clear: true
						});
					},
					save: () => {
						this.save();
					},
					discard: () => {
						if (this.staged === void 0 && !this.failed) return;
						this.staged = void 0;
						this.failed = false;
						this.publish();
					}
				};
			}
			/**
			* Write the staged edit, then re-seed from what the Host accepted.
			* @returns settlement after the write and the read-back.
			*/
			async save() {
				const write = this.plan();
				if (write === void 0 || this.saving) return;
				this.saving = true;
				this.failed = false;
				this.publish();
				const landed = await write();
				if (landed) this.staged = void 0;
				this.saving = false;
				this.failed = !landed;
				this.publish();
			}
			project() {
				const snapshot = this.scope.getSnapshot();
				const stored = this.stored();
				const current = this.sectionText();
				const staged = this.staged;
				if (staged === void 0) return {
					available: snapshot.status === "ready",
					writable: snapshot.writable,
					dirty: false,
					saving: this.saving,
					failed: this.failed,
					text: current,
					overridden: stored
				};
				return {
					available: snapshot.status === "ready",
					writable: snapshot.writable,
					dirty: staged.clear ? stored : staged.text !== current,
					saving: this.saving,
					failed: this.failed,
					text: staged.text,
					overridden: staged.clear ? false : true
				};
			}
			plan() {
				const staged = this.staged;
				if (staged === void 0) return void 0;
				if (staged.clear) return this.stored() ? () => this.clear() : void 0;
				if (staged.text === this.sectionText()) return void 0;
				return () => this.storeField(staged.text);
			}
			async clear() {
				await this.scope.unset("persona");
				return !this.stored();
			}
			async storeField(value) {
				await this.scope.set("persona", value);
				return this.userLayer()?.persona === value;
			}
			stage(edit) {
				this.staged = edit;
				this.failed = false;
				this.publish();
			}
			snapshotOf() {
				return this.scope.getSnapshot();
			}
			sectionText() {
				const value = this.snapshotOf().value?.persona;
				return typeof value === "string" ? value : "";
			}
			baseText() {
				const persona = this.snapshotOf().base?.persona;
				return typeof persona === "string" ? persona : "";
			}
			userLayer() {
				const user = this.snapshotOf().user;
				return user !== null && typeof user === "object" ? user : void 0;
			}
			stored() {
				const user = this.userLayer();
				return user !== void 0 && Object.hasOwn(user, "persona");
			}
			publish() {
				this.store.set(this.project());
			}
		};
		//#endregion
		//#region src/client/locales.ts
		/** English copy. */
		const en$1 = {
			nav: "System prompt",
			title: "System prompt",
			intro: "This page replaces the identity fragment of every session, including sessions composed from an agent preset. Tool guidance stays with each tool plugin. Changes apply on the next model step. Available variables include {{model}}, {{cwd}}, and {{provider}}; an unknown {{name}} fails that step.",
			label: "Identity",
			hint: "Leave empty and save to send no identity fragment. Reset unsets this overlay so composition and each agent preset use their own identity text.",
			overridden: "Overridden",
			reset: "Reset to default",
			readOnly: "This deployment stores settings read-only.",
			save: "Save",
			saving: "Saving…",
			discard: "Discard",
			saveFailed: "The deployment did not accept these values; they were left for you to correct.",
			unavailable: "This deployment does not expose a system-prompt setting."
		};
		/** Simplified Chinese copy. */
		const zh$1 = {
			nav: "系统提示词",
			title: "系统提示词",
			intro: "本页替换每个会话的身份片段，包括由 Agent 预设组成的会话。工具指导仍由各工具插件注册。修改在下一轮模型步骤生效。可用变量包括 {{model}}、{{cwd}} 和 {{provider}}；未知 {{name}} 会使该步失败。",
			label: "身份",
			hint: "留空并保存表示不发送身份片段。恢复默认会取消本覆盖，组合配置与各 Agent 预设会重新使用各自的身份原文。",
			overridden: "已覆盖",
			reset: "恢复默认",
			readOnly: "本部署的设置为只读。",
			save: "保存",
			saving: "保存中…",
			discard: "放弃修改",
			saveFailed: "本部署没有接受这些值，已保留供你修改。",
			unavailable: "本部署没有开放系统提示词设置。"
		};
		//#endregion
		//#region src/client/rewind/hidden.ts
		/**
		* Resolve the chat snapshot across the two harness channels: the session-face
		* snapshot first (rc.2 — on alpha.1+ the face no longer carries `chat`, so the
		* field reads `undefined`), then the `uiConversation` "chat" view. The view's
		* `getSnapshot()` returns undefined until the named view is registered, so
		* both channels missing degrades to `undefined` (no targets, no hiding —
		* never a crash).
		*/
		function chatSnapshotOf(face, chatView) {
			const legacy = face?.getSnapshot().chat;
			if (legacy !== void 0) return legacy;
			return chatView?.getSnapshot() ?? void 0;
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
		function messageTextAt(chat, seq) {
			if (chat === void 0) return void 0;
			for (const key of chat.order) {
				const node = chat.nodes.get(key);
				if (node === void 0 || node.kind !== "user" && node.kind !== "steering") continue;
				const data = node.data;
				if (data.seq === seq) return data.content?.map((block) => block.type === "text" && typeof block.text === "string" ? block.text : "").join("");
			}
		}
		/**
		* Extract the rewind target seq from a `/rewind` command's structured `args`
		* (e.g. `@5 chat`, `preview @5 both`). Locale-independent — never parses the
		* host's human outcome copy.
		*/
		function targetSeqOfArgs(args) {
			if (args === void 0 || args === null) return void 0;
			const match = args.match(/@(\d+)/);
			return match !== null ? Number(match[1]) : void 0;
		}
		/**
		* True when a `/rewind` command node is an EXECUTED rewind for `seq` — the
		* admission form the popover drives (`@<seq> chat` / `both`) that settled
		* with a marker-carrying success outcome. The composer refill waits for
		* exactly this node after the user confirms, so a history-loaded command can
		* never trigger a fill.
		*/
		function isExecutedRewindCommand(node, seq) {
			if (node.name !== "rewind" || node.outcome?.kind !== "success") return false;
			if (node.outcome.sourceEventSeq === void 0) return false;
			const args = node.args ?? "";
			return new RegExp(`(?:^|\\s)@${seq}(?:\\s|$)`).test(args);
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
		function hasFileImpact(text) {
			if (text === void 0) return true;
			const match = text.match(/impact=(\d+)/);
			if (match !== null) return Number(match[1]) > 0;
			return false;
		}
		/** True when a `/rewind` command node is an impact preview — the internal probe
		* the popover runs (`/rewind preview @seq both`) to fetch the restore/delete
		* list. Previews never surface in the transcript (their result is shown in the
		* popover), so their flow node is hidden in every state. */
		function isPreviewCommand(command) {
			return (command.args ?? "").includes("preview");
		}
		/**
		* True when a `/rewind` command node is the internal candidate-list probe
		* (`/rewind __candidates`) the popupSelect runs to fetch the FULL candidate
		* list from the host. Like previews, its flow node never surfaces in the
		* transcript — it only feeds the popup — so it is hidden in every state.
		*/
		function isCandidateCommand(command) {
			return (command.args ?? "").includes("__candidates");
		}
		/**
		* Chat-flow kinds that visually open a turn but whose `anchorSeq` is the
		* `turn/start` seq — BEFORE the rewind target user message. A `[target,
		* marker]` span therefore misses them, and after rewind they stack as leftover
		* 「系统提示词」 chips above the resent bubble (the model request is already
		* cut; this is display residue).
		*/
		const TURN_PREFIX_KINDS = /* @__PURE__ */ new Set(["system-prompt", "turn-process"]);
		function inAnySpan(spans, seq) {
			return spans.some((span) => seq >= span.start && seq <= span.end);
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
		function hideTurnPrefixChrome(snap, spans, hidden) {
			if (spans.length === 0) return;
			const humans = [];
			for (const key of snap.order) {
				const node = snap.nodes.get(key);
				if (node === void 0) continue;
				if (node.kind === "user" || node.kind === "steering") humans.push(node.anchorSeq);
			}
			humans.sort((a, b) => a - b);
			const surviving = humans.filter((seq) => !inAnySpan(spans, seq));
			for (const span of spans) {
				let previous = Number.NEGATIVE_INFINITY;
				for (const seq of surviving) if (seq < span.start) previous = seq;
				else break;
				if (previous === Number.NEGATIVE_INFINITY) continue;
				for (const key of snap.order) {
					const node = snap.nodes.get(key);
					if (node === void 0 || !TURN_PREFIX_KINDS.has(node.kind)) continue;
					const anchor = node.anchorSeq;
					if (anchor > previous && anchor < span.start) hidden.add(anchor);
				}
			}
			for (let i = 0; i < snap.order.length; i++) {
				const node = snap.nodes.get(snap.order[i]);
				if (node === void 0) continue;
				if (node.kind !== "user" && node.kind !== "steering") continue;
				if (!hidden.has(node.anchorSeq)) continue;
				for (let j = i - 1; j >= 0; j--) {
					const previous = snap.nodes.get(snap.order[j]);
					if (previous === void 0) break;
					if (previous.kind === "user" || previous.kind === "steering") break;
					if (TURN_PREFIX_KINDS.has(previous.kind)) {
						hidden.add(previous.anchorSeq);
						continue;
					}
					break;
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
		function hiddenSeqsOf(snap) {
			const hidden = /* @__PURE__ */ new Set();
			const spans = [];
			for (const key of snap.order) {
				const node = snap.nodes.get(key);
				if (node === void 0 || node.kind !== "command") continue;
				const command = node.data;
				if (command.name !== "rewind") continue;
				if (isPreviewCommand(command) || isCandidateCommand(command)) {
					hidden.add(command.seq);
					continue;
				}
				if (command.outcome?.kind !== "success") continue;
				const marker = command.outcome.sourceEventSeq;
				if (marker === void 0) continue;
				hidden.add(command.seq);
				const target = targetSeqOfArgs(command.args);
				if (target !== void 0) spans.push({
					start: target,
					end: marker
				});
			}
			for (const key of snap.order) {
				const node = snap.nodes.get(key);
				if (node === void 0) continue;
				const anchor = node.anchorSeq;
				if (spans.some((span) => anchor >= span.start && anchor <= span.end)) hidden.add(anchor);
			}
			hideTurnPrefixChrome(snap, spans, hidden);
			return hidden;
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
		function hiddenTurnsOf(snap, hiddenSeqs) {
			const turns = /* @__PURE__ */ new Set();
			for (const key of snap.order) {
				const node = snap.nodes.get(key);
				if (node === void 0) continue;
				if (node.kind !== "user" && node.kind !== "steering") continue;
				if (!hiddenSeqs.has(node.anchorSeq)) continue;
				const turn = node.location?.turn?.turn;
				if (typeof turn === "number" && Number.isSafeInteger(turn) && turn >= 1) turns.add(turn);
			}
			return turns;
		}
		/** Join the text blocks of a user message into one plain preview. */
		function messagePreviewOf(message) {
			const text = message.content.map((block) => block.type === "text" && typeof block.text === "string" ? block.text : "").join("").replace(/\s+/g, " ").trim();
			return text.length <= 80 ? text : `${text.slice(0, 79)}…`;
		}
		/** Format a candidate row's clock time (`HH:MM`), matching the host format. */
		function formatCandidateTime(time) {
			const d = new Date(time);
			return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
		}
		/**
		* List the selectable rewind candidates of a session chat snapshot: user and
		* steering rows still on the surface (not hidden by a previous rewind), the
		* newest `limit` kept, newest first — the top row is the default highlight,
		* i.e. the most recent message and the most common rewind target.
		* @param snap - the session chat snapshot.
		* @param hidden - anchor seqs withdrawn by rewinds (from `hiddenSeqsOf`).
		* @param limit - maximum number of candidates to return.
		*/
		function rewindCandidatesOf(snap, hidden, limit = 100) {
			const candidates = [];
			for (let i = snap.order.length - 1; i >= 0 && candidates.length < limit; i--) {
				const key = snap.order[i];
				if (key === void 0) continue;
				const node = snap.nodes.get(key);
				if (node === void 0 || node.kind !== "user" && node.kind !== "steering") continue;
				if (hidden.has(node.anchorSeq ?? node.data.seq)) continue;
				candidates.push({
					seq: node.data.seq,
					time: node.data.time,
					preview: messagePreviewOf(node.data)
				});
			}
			return candidates;
		}
		/** The candidates of a live chat snapshot, withdrawn rows already excluded. */
		function rewindCandidatesOfChat(snap) {
			return rewindCandidatesOf(snap, hiddenSeqsOf(snap));
		}
		/**
		* Header prefix of the host's machine-readable candidate list (matches
		* `CANDIDATE_LIST_HEADER` in src/rewind.ts). Kept as a local literal so the
		* client bundle never imports the host module (which would drag in dsh-session).
		*/
		const CANDIDATE_LIST_HEADER = "candidates=";
		/**
		* Parse the host's candidate-list encoding (see `formatCandidateList` in
		* src/rewind.ts) into typed candidates. Malformed lines are skipped; a
		* missing/zero header yields an empty list.
		*/
		function rewindCandidatesFromHostText(text) {
			if (!text.startsWith(CANDIDATE_LIST_HEADER)) return [];
			const lines = text.split("\n").slice(1);
			const candidates = [];
			for (const line of lines) {
				if (line === "") continue;
				const parts = line.split("	");
				if (parts.length !== 3) continue;
				const seq = Number(parts[0]);
				const time = Number(parts[1]);
				const preview = parts[2] ?? "";
				if (!Number.isSafeInteger(seq) || !Number.isFinite(time)) continue;
				candidates.push({
					seq,
					time,
					preview
				});
			}
			return candidates;
		}
		/**
		* Map typed candidates to popupSelect rows (the host-derived path). The
		* popupSelect sources its options from the FULL host surface via the
		* `__candidates` channel instead of the windowed chat snapshot.
		*/
		function rewindOptionsFromCandidates(candidates, t) {
			return candidates.map((candidate) => ({
				id: String(candidate.seq),
				label: candidate.preview || t("popover.noText"),
				detail: formatCandidateTime(candidate.time)
			}));
		}
		//#endregion
		//#region src/client/rewind/styles.ts
		/**
		* Client plugin styling: one injected `<style>` tag (scoped class names),
		* following the dsh design tokens (`--dsw-*`) so the button and popover blend
		* with the conversation chrome.
		*
		* @module dsh-rewind/client/styles
		*/
		/** Class names shared between the injected DOM and the stylesheet. */
		const CLASS = {
			button: "dsh-rewind-btn",
			popover: "dsh-rewind-popover",
			popoverTitle: "dsh-rewind-popover-title",
			popoverTarget: "dsh-rewind-popover-target",
			popoverOption: "dsh-rewind-popover-option",
			popoverOptionLabel: "dsh-rewind-popover-option-label",
			popoverOptionHint: "dsh-rewind-popover-option-hint",
			popoverImpact: "dsh-rewind-popover-impact",
			popoverActions: "dsh-rewind-popover-actions",
			popoverPrimary: "dsh-rewind-popover-primary",
			popoverGhost: "dsh-rewind-popover-ghost",
			guardHint: "dsh-rewind-guard-hint"
		};
		/** The ↶ glyph, drawn inline so the bundle stays dependency-free. */
		const REWIND_ICON_SVG = [
			"<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\">",
			"  <path d=\"M6.5 2.5 2.5 6.5l4 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
			"  <path d=\"M2.5 6.5h7a4 4 0 0 1 4 4v1.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>",
			"</svg>"
		].join("");
		/** One injected stylesheet (scoped under `.dsh-rewind-*`). */
		const STYLE = `
.dsh-rewind-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 6px;
  border: none;
  border-radius: 28px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  cursor: pointer;
}
.dsh-rewind-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-secondary);
}

.dsh-rewind-popover {
  position: fixed;
  z-index: 1000;
  width: 288px;
  padding: 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-specific-menu, var(--dsw-alias-bg-layer-3));
  box-shadow: var(--dsw-shadow-lv3);
  font-size: 14px;
  line-height: 20px;
  color: var(--dsw-alias-label-primary);
}
.dsh-rewind-popover-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.dsh-rewind-popover-target {
  margin: 4px 0 10px;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-tertiary);
  word-break: break-all;
}
.dsh-rewind-popover-option {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  margin: 0 0 6px;
  padding: 8px 10px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.dsh-rewind-popover-option:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
.dsh-rewind-popover-option:disabled {
  opacity: 0.5;
  cursor: default;
}
.dsh-rewind-popover-option-label {
  font-weight: 500;
}
.dsh-rewind-popover-option-hint {
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-tertiary);
}
.dsh-rewind-popover-impact {
  margin: 4px 0 10px;
  padding: 8px 10px;
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-hover);
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary);
  white-space: pre-wrap;
  max-height: 160px;
  overflow: auto;
}
.dsh-rewind-popover-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.dsh-rewind-popover-primary,
.dsh-rewind-popover-ghost {
  padding: 5px 12px;
  border: none;
  border-radius: 8px;
  font: inherit;
  font-size: 13px;
  line-height: 18px;
  cursor: pointer;
}
.dsh-rewind-popover-primary {
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
}
.dsh-rewind-popover-primary:hover:not(:disabled) {
  background: var(--dsw-alias-button-primary-hover);
}
.dsh-rewind-popover-primary:disabled {
  opacity: 0.5;
  cursor: default;
}
.dsh-rewind-popover-ghost {
  background: transparent;
  color: var(--dsw-alias-label-secondary);
}
.dsh-rewind-popover-ghost:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.dsh-rewind-guard-hint {
  position: fixed;
  z-index: 1000;
  max-width: min(440px, calc(100vw - 24px));
  padding: 8px 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-specific-menu, var(--dsw-alias-bg-layer-3));
  box-shadow: var(--dsw-shadow-lv3);
  font-size: 13px;
  line-height: 18px;
  color: var(--dsw-alias-label-primary);
  pointer-events: none;
}

/* ---- Snapshot-cleanup settings card (mirrors the harness PluginCard look) ---- */
.dsh-rewind-cleanup-card {
  list-style: none;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-3);
  transition: border-color .16s, background .16s;
}
.dsh-rewind-cleanup-card:hover {
  border-color: var(--dsw-alias-label-dimmed);
}
.dsh-rewind-cleanup-card-open {
  background: var(--dsw-alias-bg-layer-2);
  border-color: var(--dsw-alias-label-dimmed);
}
.dsh-rewind-cleanup-header {
  width: 100%;
  appearance: none;
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
}
.dsh-rewind-cleanup-header:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: -2px;
}
.dsh-rewind-cleanup-head-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dsh-rewind-cleanup-name {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--dsw-alias-label-primary);
}
.dsh-rewind-cleanup-desc {
  font-size: 13px;
  line-height: 1.5;
  color: var(--dsw-alias-label-tertiary);
}
.dsh-rewind-cleanup-chevron {
  flex: none;
  color: var(--dsw-alias-label-tertiary);
  transition: transform .16s;
}
.dsh-rewind-cleanup-chevron-open {
  transform: rotate(180deg);
}
.dsh-rewind-cleanup-pending {
  flex: none;
  border-radius: 999px;
  padding: 1px 8px;
  font-size: 11px;
  line-height: 17px;
  font-weight: 500;
  white-space: nowrap;
  background: var(--dsw-alias-bg-module-platform);
  color: var(--dsw-alias-label-secondary);
}
.dsh-rewind-cleanup-body {
  border-top: 1px solid var(--dsw-alias-border-l2);
  margin: 0 16px;
  padding: 4px 0 8px;
}
.dsh-rewind-cleanup-readonly {
  margin: 12px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-alias-label-tertiary);
}
.dsh-rewind-cleanup-permission {
  display: grid;
  gap: 6px;
  padding: 12px 0;
}
.dsh-rewind-cleanup-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 0;
}
.dsh-rewind-cleanup-field + .dsh-rewind-cleanup-field {
  border-top: 1px solid var(--dsw-alias-border-l2);
}
.dsh-rewind-cleanup-head {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dsh-rewind-cleanup-label {
  flex: 1;
  min-width: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--dsw-alias-label-primary);
}
.dsh-rewind-cleanup-hint {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-alias-label-tertiary);
}
.dsh-rewind-cleanup-error {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-alias-label-error);
}
/* Switch row: label left, role=switch button right, hint below (Subagent module). */
.dsh-rewind-cleanup-toggle-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--dsw-alias-label-primary);
}
.dsh-rewind-cleanup-toggle-label {
  flex: 1;
  min-width: 0;
}
.dsh-rewind-cleanup-switch {
  box-sizing: border-box;
  position: relative;
  flex: 0 0 auto;
  width: 36px;
  height: 20px;
  padding: 2px;
  border: 0;
  border-radius: 10px;
  background: var(--dsw-alias-border-l3);
  cursor: pointer;
}
.dsh-rewind-cleanup-switch-on {
  background: var(--dsw-alias-brand-primary);
}
.dsh-rewind-cleanup-switch:disabled {
  cursor: default;
  opacity: 0.5;
}
.dsh-rewind-cleanup-switch:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
}
.dsh-rewind-cleanup-thumb {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--dsw-alias-label-primary-foreground);
  transition: transform 120ms ease;
}
.dsh-rewind-cleanup-switch-on .dsh-rewind-cleanup-thumb {
  transform: translateX(16px);
}
.dsh-rewind-cleanup-input {
  box-sizing: border-box;
  height: 34px;
  padding: 0 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-3);
  font: inherit;
  font-size: 13px;
  line-height: 1.5;
  color: var(--dsw-alias-label-primary);
}
.dsh-rewind-cleanup-input:focus-visible {
  outline: none;
  border-color: var(--dsw-alias-brand-primary);
}
.dsh-rewind-cleanup-input:disabled {
  color: var(--dsw-alias-label-tertiary);
  cursor: default;
}
.dsh-rewind-cleanup-input-invalid {
  border-color: var(--dsw-alias-label-error);
}
.dsh-rewind-cleanup-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 0 4px;
  border-top: 1px solid var(--dsw-alias-border-l2);
}
.dsh-rewind-cleanup-failed {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-alias-label-error);
}
.dsh-rewind-cleanup-discard,
.dsh-rewind-cleanup-save {
  appearance: none;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 5px 14px;
  font: inherit;
  font-size: 13px;
  line-height: 1.5;
  cursor: pointer;
}
.dsh-rewind-cleanup-discard {
  border-color: var(--dsw-alias-border-l2);
  background: none;
  color: var(--dsw-alias-label-secondary);
}
.dsh-rewind-cleanup-discard:hover:not(:disabled) {
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-label-dimmed);
}
.dsh-rewind-cleanup-save {
  background: var(--dsw-alias-label-primary);
  color: var(--dsw-alias-bg-layer-3);
}
.dsh-rewind-cleanup-discard:disabled,
.dsh-rewind-cleanup-save:disabled {
  opacity: 0.4;
  cursor: default;
}
.dsh-rewind-cleanup-discard:focus-visible,
.dsh-rewind-cleanup-save:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 1px;
}
`;
		//#endregion
		//#region src/client/rewind/popover.ts
		/** The single live popover element, or null when closed. */
		let popoverEl = null;
		let disposeOutside = null;
		/** Close the current popover, if any. */
		function closePopover() {
			if (popoverEl !== null) {
				popoverEl.remove();
				popoverEl = null;
			}
			if (disposeOutside !== null) {
				disposeOutside();
				disposeOutside = null;
			}
		}
		/** Format the target line (seq · HH:MM · preview). */
		function formatTarget(t, seq, time, preview) {
			const d = new Date(time);
			return `seq ${seq} · ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} · ${preview.length > 0 ? preview : t("popover.noText")}`;
		}
		/**
		* Parse the host's machine-readable impact trailer from a preview outcome text
		* (the trailing lines of formatPlan in src/index.ts): `impact=<n>` plus one
		* `restore:<path>` / `delete:<path>` line per file. Locale-independent — the
		* human copy above the trailer is ignored; the popover renders its own
		* localized list from these tokens.
		*/
		function parseImpactList(text) {
			const restores = [];
			const deletes = [];
			for (const line of text.split("\n")) if (line.startsWith("restore:")) restores.push(line.slice(8));
			else if (line.startsWith("delete:")) deletes.push(line.slice(7));
			return {
				restores,
				deletes
			};
		}
		/** Find the newest rewind command node matching a predicate. */
		function findCommand(chat, match) {
			if (chat === void 0) return void 0;
			let found;
			for (const key of chat.order) {
				const node = chat.nodes.get(key);
				if (node !== void 0 && node.kind === "command") {
					const command = node.data;
					if (match(command)) found = command;
				}
			}
			return found;
		}
		/**
		* Seqs of the command nodes currently matching `match`. Sample BEFORE issuing
		* a new command of the same shape so the subsequent wait can exclude them: a
		* repeated preview/rewind of the same target must not settle on the previous
		* command's stale outcome (e.g. an older preview that found file changes,
		* after those changes were already restored).
		*/
		function knownCommandSeqs(session, chatOf, match) {
			const known = /* @__PURE__ */ new Set();
			const chat = chatOf(session);
			if (chat === void 0) return known;
			for (const key of chat.order) {
				const node = chat.nodes.get(key);
				if (node !== void 0 && node.kind === "command") {
					const command = node.data;
					if (match(command)) known.add(command.seq);
				}
			}
			return known;
		}
		/**
		* Resolve the outcome of the newest matching rewind command by watching the
		* session snapshot (command/run + command/done land as one CommandNode).
		* @returns the outcome text-bearing node, or null on timeout.
		*/
		function waitForCommand(session, chatOf, match, timeoutMs = 8e3) {
			return new Promise((resolve) => {
				let settled = false;
				const settle = (value) => {
					if (settled) return;
					settled = true;
					clearTimeout(timer);
					unsubscribe();
					resolve(value);
				};
				const check = () => {
					const node = findCommand(chatOf(session), match);
					if (node?.outcome !== null && node?.outcome !== void 0) settle({
						kind: node.outcome.kind,
						text: node.outcome.text
					});
				};
				const unsubscribe = session.subscribe(check);
				const timer = setTimeout(() => settle(null), timeoutMs);
				check();
			});
		}
		/** True for the `/rewind preview @<seq> both` command node of one target. */
		function isPreviewFor(node, seq) {
			const args = node.args ?? "";
			return node.name === "rewind" && args.includes("preview") && new RegExp(`(?:^|\\s)@${seq}(?=\\s|$)`).test(args);
		}
		/**
		* Run `/rewind preview @seq both` and await its outcome. Returns null when the
		* command was not matched or timed out.
		*/
		async function previewImpact(session, chatOf, seq) {
			const known = knownCommandSeqs(session, chatOf, (node) => isPreviewFor(node, seq));
			const result = await session.command(`/rewind preview @${seq} both`);
			if (!result.ok || result.value?.matched !== true) return null;
			return waitForCommand(session, chatOf, (node) => isPreviewFor(node, seq) && !known.has(node.seq));
		}
		/** Element factory helpers (kept local so no framework is involved). */
		function el(tag, className, text) {
			const node = document.createElement(tag);
			node.className = className;
			if (text !== void 0) node.textContent = text;
			return node;
		}
		function modeOption(label, hint, onClick) {
			const button = document.createElement("button");
			button.type = "button";
			button.className = CLASS.popoverOption;
			const labelEl = el("span", CLASS.popoverOptionLabel, label);
			const hintEl = el("span", CLASS.popoverOptionHint, hint);
			button.append(labelEl, hintEl);
			button.addEventListener("click", onClick);
			return button;
		}
		/**
		* The enabled, focusable buttons of the current popover step, in DOM order.
		* The ghost back/cancel buttons are deliberately excluded: they are Esc-only
		* (never in the ↑/↓ cycle).
		*/
		function focusableButtons(root) {
			return Array.from(root.querySelectorAll("button")).filter((button) => !button.disabled && !button.classList.contains(CLASS.popoverGhost));
		}
		/** Focus the first enabled button of the current step (no-op when none). */
		function focusFirst(root) {
			focusableButtons(root)[0]?.focus();
		}
		/** Move focus across the step's buttons, wrapping around at the ends. */
		function moveFocus(root, dir) {
			const buttons = focusableButtons(root);
			if (buttons.length === 0) return;
			const active = document.activeElement;
			const index = active instanceof HTMLButtonElement ? buttons.indexOf(active) : -1;
			buttons[index === -1 ? dir === 1 ? 0 : buttons.length - 1 : (index + dir + buttons.length) % buttons.length]?.focus();
		}
		/**
		* Render the impact step: show the impact outcome, then confirm/back.
		* Reuses the outcome already fetched when the popover opened (the "both"
		* option is only clickable after that fetch settles) — running a second
		* preview command here would re-run the probe and emit a second (now-hidden)
		* command row; a fresh preview is only fetched when the popover-open probe
		* never resolved.
		*/
		function renderImpactStep(root, opts, back, cached) {
			const { session, seq, t } = opts;
			const impact = el("div", CLASS.popoverImpact, t("popover.impact.loading"));
			const actions = el("div", CLASS.popoverActions);
			const backButton = document.createElement("button");
			backButton.type = "button";
			backButton.className = CLASS.popoverGhost;
			backButton.textContent = t("popover.back");
			backButton.addEventListener("click", back);
			actions.append(backButton);
			const confirm = document.createElement("button");
			confirm.type = "button";
			confirm.className = CLASS.popoverPrimary;
			confirm.textContent = t("popover.confirm");
			confirm.disabled = true;
			actions.append(confirm);
			root.replaceChildren(impact, actions);
			focusFirst(root);
			(async () => {
				const outcome = cached ?? await previewImpact(session, opts.chatOf, seq);
				if (outcome === null) {
					impact.textContent = t("popover.impact.failed", { message: "preview command failed or timed out" });
					return;
				}
				if (outcome.kind === "error") {
					impact.textContent = t("popover.impact.failed", { message: outcome.text ?? "unknown error" });
					return;
				}
				if (outcome.text === void 0) impact.textContent = t("popover.impact.none");
				else {
					const { restores, deletes } = parseImpactList(outcome.text);
					if (restores.length === 0 && deletes.length === 0) impact.textContent = t("popover.impact.none");
					else {
						const lines = [...restores.map((path) => t("popover.impact.restore", { path })), ...deletes.map((path) => t("popover.impact.delete", { path }))];
						impact.textContent = lines.join("\n");
					}
				}
				confirm.disabled = false;
				confirm.focus();
				confirm.addEventListener("click", () => {
					closePopover();
					opts.onRewind("both");
				});
			})().catch(() => {
				impact.textContent = t("popover.impact.failed", { message: "unexpected error" });
			});
		}
		/** Mount the shared popover chrome around `root` (durable and pending variants). */
		function mountShell(root, anchor, onKeyDown) {
			/** Position below the anchor (right-aligned), flipping above near the edge. */
			const position = () => {
				const rect = anchor.getBoundingClientRect();
				const gap = 4;
				const height = root.offsetHeight;
				const top = rect.bottom + gap + height <= window.innerHeight - 8 ? rect.bottom + gap : Math.max(8, rect.top - gap - height);
				root.style.top = `${Math.round(top)}px`;
				root.style.left = `${Math.round(Math.min(rect.right, window.innerWidth - 8 - root.offsetWidth))}px`;
			};
			const onPointerDown = (event) => {
				const target = event.target;
				if (root.contains(target) || anchor.contains(target)) return;
				closePopover();
			};
			const deferred = setTimeout(() => {
				document.addEventListener("pointerdown", onPointerDown);
				document.addEventListener("keydown", onKeyDown, true);
			}, 0);
			const dispose = () => {
				clearTimeout(deferred);
				document.removeEventListener("pointerdown", onPointerDown);
				document.removeEventListener("keydown", onKeyDown, true);
			};
			document.body.append(root);
			position();
			return {
				position,
				dispose
			};
		}
		/**
		* Open the pending-retract popover: a single-confirm dialog for one pre-sent
		* steering message. No mode selection and no impact preview — the message has
		* never been processed, so there are no files to restore and nothing to
		* choose. Confirm closes the popover and hands off to `onRetract` (the
		* `updateQueue remove` + composer-refill lifecycle in portals.tsx).
		*/
		function openRetractPopover(opts) {
			closePopover();
			const { preview, anchor, t, retract, onRetract } = opts;
			if (retract === void 0 || onRetract === void 0) return;
			const root = el("div", CLASS.popover);
			root.setAttribute("role", "dialog");
			root.setAttribute("aria-label", t("popover.retract.title"));
			const onKeyDown = (event) => {
				if (event.key === "ArrowDown") {
					event.preventDefault();
					event.stopPropagation();
					moveFocus(root, 1);
					return;
				}
				if (event.key === "ArrowUp") {
					event.preventDefault();
					event.stopPropagation();
					moveFocus(root, -1);
					return;
				}
				if (event.key === "Escape") {
					event.preventDefault();
					event.stopPropagation();
					closePopover();
				}
			};
			const previewText = preview.length > 0 ? preview : t("popover.noText");
			const actions = el("div", CLASS.popoverActions);
			const confirm = document.createElement("button");
			confirm.type = "button";
			confirm.className = CLASS.popoverPrimary;
			confirm.textContent = t("popover.retract.confirm");
			confirm.addEventListener("click", () => {
				closePopover();
				onRetract();
			});
			const cancel = document.createElement("button");
			cancel.type = "button";
			cancel.className = CLASS.popoverGhost;
			cancel.textContent = t("popover.cancel");
			cancel.addEventListener("click", closePopover);
			actions.append(confirm, cancel);
			root.replaceChildren(el("div", CLASS.popoverTitle, t("popover.retract.title")), el("div", CLASS.popoverTarget, t("popover.retract.target", { preview: previewText })), el("div", CLASS.popoverImpact, t("popover.retract.hint")), actions);
			const shell = mountShell(root, anchor, onKeyDown);
			popoverEl = root;
			disposeOutside = shell.dispose;
			focusFirst(root);
		}
		/** Open the mode-selection popover anchored near the given button. */
		function openPopover(opts) {
			closePopover();
			if (opts.retract !== void 0) {
				openRetractPopover(opts);
				return;
			}
			const { session, seq, time, preview, anchor, t, chatOf } = opts;
			const onRewind = opts.onRewind;
			if (seq === void 0 || time === void 0 || onRewind === void 0) return;
			const durableOpts = {
				session,
				seq,
				time,
				preview,
				anchor,
				t,
				chatOf,
				onRewind
			};
			const root = el("div", CLASS.popover);
			root.setAttribute("role", "dialog");
			root.setAttribute("aria-label", t("popover.title"));
			let bothState = { state: "loading" };
			/** Impact outcome fetched at open; reused by the both-step (no second command row). */
			let impactOutcome = null;
			/** Current step: Esc acts as cancel on the modes step, as back on impact. */
			let step = "modes";
			const renderModes = () => {
				step = "modes";
				const children = [
					el("div", CLASS.popoverTitle, t("popover.title")),
					el("div", CLASS.popoverTarget, formatTarget(t, seq, time, preview)),
					modeOption(t("popover.chat"), t("popover.chat.hint"), () => {
						closePopover();
						durableOpts.onRewind("chat");
					})
				];
				if (bothState.state === "noChanges") children.push(el("div", CLASS.popoverImpact, t("popover.noChanges")));
				else if (bothState.state === "error") children.push(el("div", CLASS.popoverImpact, t("popover.impact.failed", { message: bothState.message })));
				else {
					const option = modeOption(t("popover.both"), bothState.state === "loading" ? t("popover.checking") : t("popover.both.hint"), renderImpact);
					if (bothState.state === "loading") option.disabled = true;
					children.push(option);
				}
				const actions = el("div", CLASS.popoverActions);
				const cancel = document.createElement("button");
				cancel.type = "button";
				cancel.className = CLASS.popoverGhost;
				cancel.textContent = t("popover.cancel");
				cancel.addEventListener("click", closePopover);
				actions.append(cancel);
				children.push(actions);
				root.replaceChildren(...children);
				focusFirst(root);
			};
			/** Move to the impact step (its back/Esc returns to the modes step). */
			const renderImpact = () => {
				step = "impact";
				renderImpactStep(root, durableOpts, renderModes, impactOutcome);
			};
			const onKeyDown = (event) => {
				if (event.key === "ArrowDown") {
					event.preventDefault();
					event.stopPropagation();
					moveFocus(root, 1);
					return;
				}
				if (event.key === "ArrowUp") {
					event.preventDefault();
					event.stopPropagation();
					moveFocus(root, -1);
					return;
				}
				if (event.key === "Escape") {
					event.preventDefault();
					event.stopPropagation();
					if (step === "impact") renderModes();
					else closePopover();
				}
			};
			renderModes();
			const shell = mountShell(root, anchor, onKeyDown);
			popoverEl = root;
			disposeOutside = shell.dispose;
			(async () => {
				const outcome = await previewImpact(session, chatOf, seq);
				impactOutcome = outcome;
				if (outcome !== null && outcome.kind === "success") bothState = { state: hasFileImpact(outcome.text) ? "hasChanges" : "noChanges" };
				else if (outcome !== null && outcome.kind === "error") bothState = {
					state: "error",
					message: outcome.text ?? "unknown error"
				};
				renderModes();
				shell.position();
			})().catch(() => {
				bothState = { state: "hasChanges" };
				renderModes();
				shell.position();
			});
		}
		//#endregion
		//#region src/client/rewind/pending.ts
		/**
		* Pair rows to steering items by index, verifying text equality per row.
		* @param rows - pending bubble rows in DOM order (== render order).
		* @param steering - steering queue items in host order (== render order).
		* @returns the item id for each row, or null for rows that cannot be matched
		*   safely (missing counterpart, text mismatch). A bad row never affects the
		*   other rows.
		*/
		function matchPendingRows(rows, steering) {
			const matched = [];
			for (let i = 0; i < rows.length; i++) {
				const row = rows[i];
				const item = steering[i];
				if (item !== void 0 && row.text === (item.text ?? "")) matched.push(item.id);
				else matched.push(null);
			}
			return matched;
		}
		/**
		* The pending-steering ids a "rewind to this pre-sent message" retracts: the
		* target occurrence and every steering message after it, in inbox (FIFO)
		* order. Queued (next-turn) messages are deliberately NOT included — the
		* harness QueueDock already offers the user per-item edit/remove, so a rewind
		* must not silently drop messages the user may still want to send.
		* @param steering - steering queue items in host order (== render order).
		* @param targetId - the rewind target's inbox occurrence id.
		* @returns the ids to remove, oldest-first; empty when the target is no
		*   longer pending (already claimed/consumed).
		*/
		function retractSpan(steering, targetId) {
			const index = steering.findIndex((item) => item.id === targetId);
			if (index === -1) return [];
			return steering.slice(index).map((item) => item.id);
		}
		//#endregion
		//#region src/client/rewind/portals.tsx
		/**
		* dsh-rewind portal half: the per-user-message ↶ rewind button, rendered as a
		* React portal inside the message's `MessageIconActions` row.
		*
		* Why portals (aligned with the copy button's own rendering): the copy button
		* is a React child of the actions row, painted in the same commit as the
		* bubble. A pure-DOM `appendChild` (the earlier approach) lands one microtask
		* later and re-runs a full-transcript scan on EVERY mutation, which can push
		* the paint of a newly sent bubble — the "occasional hiccup before the bubble
		* shows". Portals let React own the button lifecycle (mount/unmount with the
		* row, no orphaned buttons, no manual re-attach after harness re-renders),
		* and the target collection is coalesced (one refresh per mutation batch) and
		* diffed (no setState churn when nothing changed).
		*
		* Mount point: the plugin registers a session-scoped bridge into the harness's
		* `conversation.session.header.actions` list slot. The bridge renders NO
		* header UI — it only portals buttons into the user rows of the session the
		* harness mounts it for. That slot is the harness-native way to get a
		* per-session React mount without touching any source; the registration is
		* typed structurally (see `SlotsLike`) so the plugin never imports the
		* conversation UI package's types and survives its version drift.
		*
		* @module dsh-rewind/client/portals
		*/
		/**
		* Write `text` into the rc.2 `<textarea>` composer (React-controlled: use the
		* native setter so the value change is seen, then dispatch an input event,
		* then focus). The rc.2 pathway is byte-for-byte unchanged.
		*/
		function fillComposerTextarea(text) {
			const textarea = document.querySelector(COMPOSER_TEXTAREA_SELECTOR$1);
			if (textarea === null) return false;
			(Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set)?.call(textarea, text);
			textarea.dispatchEvent(new Event("input", { bubbles: true }));
			textarea.focus();
			return true;
		}
		/**
		* Write `text` into the alpha.1+ Lexical `contenteditable` composer
		* (`[data-composer-input]`) through the native editing pipeline: set a
		* full-content selection, then `insertText`. That fires `beforeinput`, which
		* the harness's plain-text Lexical editor adopts into its model, exactly like
		* a user typing. Falls back to a direct text-node write when `execCommand` is
		* unavailable (non-Chromium only); best-effort.
		*/
		function fillComposerEditable(text) {
			const editable = document.querySelector(COMPOSER_EDITABLE_SELECTOR$1);
			if (editable === null) return false;
			editable.focus();
			const selection = document.getSelection();
			if (selection !== null) {
				const range = document.createRange();
				range.selectNodeContents(editable);
				selection.removeAllRanges();
				selection.addRange(range);
			}
			let ok = false;
			try {
				ok = document.execCommand("insertText", false, text);
			} catch {
				ok = false;
			}
			if (ok) return true;
			editable.textContent = text;
			editable.dispatchEvent(new Event("input", { bubbles: true }));
			return true;
		}
		/**
		* Fill the dsh composer with `text`. DOM dual-channel fallback: the rc.2
		* `<textarea>` path, then the alpha.1+ `contenteditable` path. Used by
		* `setComposerText` (the harness-facade-aware writer) as the last-resort and
		* by `runRewindAndFill` to put the withdrawn target message back into the
		* composer after a rewind. Best-effort — no composer match means false,
		* never a throw.
		*/
		function fillComposer(text) {
			if (fillComposerTextarea(text)) return true;
			return fillComposerEditable(text);
		}
		/**
		* Dual-channel composer write, mirroring `chatSnapshotOf`: prefer the harness
		* facade's `setDraft` (alpha.1+, correct whole-draft replace), then degrade
		* to the DOM `fillComposer` (rc.2 textarea / alpha.1 contenteditable). A
		* facade that throws (session teardown) is treated as absent so the DOM path
		* still restores the text. Never throws.
		* @param text - the withdrawn target message text.
		* @param facade - the alpha.1+ session input draft writer, when reachable.
		* @returns whether a channel applied the text.
		*/
		function writeComposer(text, facade) {
			if (facade !== void 0) try {
				facade.setDraft(text);
				return true;
			} catch {}
			return fillComposer(text);
		}
		/** The durable user/steering node behind a seat key via the runtime snapshot. */
		function userNodeOf(chat, key) {
			const node = chat?.nodes.get(key);
			if (node === void 0 || node.kind !== "user" && node.kind !== "steering") return void 0;
			return node.data;
		}
		/**
		* Execute one rewind from the popover and, when it settles successfully,
		* put the withdrawn target message's text back into the composer so the
		* user can edit and re-send.
		*
		* THE COMPOSER FILL IS EVENT-DRIVEN: it runs only when THIS page performed
		* the rewind (the user clicked confirm moments ago). It must NEVER scan
		* loaded history for rewind commands: a session window opens with only
		* the tail page and grows via loadOlder, so a "command already in the
		* snapshot" cannot be told apart from "command executed in this page" —
		* the old baseline heuristic refilled withdrawn text into the composer
		* after switching sessions or restarting dsh.
		*/
		async function runRewindAndFill(session, seq, mode, currentSessionId, chatOf, setComposerText) {
			const known = knownCommandSeqs(session, chatOf, (node) => isExecutedRewindCommand(node, seq));
			const result = await session.command(`/rewind @${seq} ${mode}`);
			if (!result.ok || result.value?.matched !== true) return;
			const outcome = await waitForCommand(session, chatOf, (node) => isExecutedRewindCommand(node, seq) && !known.has(node.seq), 2e4);
			if (outcome === null) return;
			if (outcome.kind !== "success") {
				showHint(outcome.text ?? "rewind failed");
				return;
			}
			if (currentSessionId() !== session.sessionId) return;
			const text = messageTextAt(chatOf(session), seq);
			if (text === void 0 || text === "") return;
			setComposerText(session.sessionId, text);
		}
		/** The composer's text-holding element: rc.2 `<textarea>` or alpha.1+ contenteditable. */
		function composerSurface() {
			return document.querySelector(COMPOSER_TEXTAREA_SELECTOR$1) ?? document.querySelector(COMPOSER_EDITABLE_SELECTOR$1);
		}
		/** Transient status toast above the composer (rewind-failure notification). */
		function showHint(text) {
			const surface = composerSurface();
			const hint = document.createElement("div");
			hint.className = CLASS.guardHint;
			hint.setAttribute("role", "status");
			hint.textContent = text;
			document.body.appendChild(hint);
			if (surface !== null) {
				const card = surface.closest("[data-composer-card]");
				const rect = card instanceof HTMLElement ? card.getBoundingClientRect() : surface.getBoundingClientRect();
				hint.style.left = `${Math.round(rect.left)}px`;
				hint.style.bottom = `${Math.round(window.innerHeight - rect.top + 8)}px`;
			}
			window.setTimeout(() => hint.remove(), 3200);
		}
		/**
		* The composer's text surface, whichever harness version is running. rc.2
		* renders a `<textarea>` under `[data-input-scroll]`; 0.1.2-alpha.1 replaced
		* it with a Lexical `contenteditable` div (`[data-composer-input]`). The
		* refill must write to whichever exists, so the withdrawn text reaches the
		* composer on both channels.
		*/
		const COMPOSER_TEXTAREA_SELECTOR$1 = "[data-input-scroll] textarea, textarea[data-phase]";
		const COMPOSER_EDITABLE_SELECTOR$1 = "[data-composer-input]";
		/** Both durable user messages and durable steering inputs render user-style rows. */
		const USER_SEAT_SELECTOR = "[data-chat-flow-kind=\"user\"][data-chat-anchor-key], [data-chat-flow-kind=\"steering\"][data-chat-anchor-key]";
		/** Every conversation seat row (hidden rows included). */
		const CHAT_SEAT_SELECTOR = "[data-chat-anchor-key]";
		/**
		* Trajectory blocks keyed by 1-based turn index (`section[data-turn]`, rail
		* ticks). Chat seats use `data-chat-turn` for the same index. Withdrawn user
		* turns must disappear here too — the rail otherwise keeps a tick per
		* append-only `turn/start`, which looks like the resent request still carried
		* every previous round.
		*/
		const TRAJECTORY_TURN_SELECTOR = "[data-turn]";
		/**
		* The row container whose hover reveals the actions (and the time). Dual
		* channel: DSH ≤ 0.1.1-rc.x used `[data-time-hover-root]`; 0.1.2-alpha.2+
		* replaced it with `[data-actions-reveal]` on the message root. Matching both
		* keeps the ↶ button on both generations (a layout change must never drop the
		* portal).
		*/
		const ACTIONS_ROOT_SELECTOR = "[data-time-hover-root], [data-actions-reveal]";
		/** Pending steering bubble rows (Host-authoritative pre-admission projection). */
		const PENDING_SEAT_SELECTOR = "[data-pending-steering][data-time-hover-root], [data-pending-steering][data-actions-reveal]";
		/**
		* Collect the portal targets of one session: user rows × snapshot nodes.
		* Exported as a test seam — the DOM→targets pairing that drives the ↶ button
		* is otherwise only reachable through a full React portal render.
		*/
		function collectTargets(chat, hiddenSeqs) {
			const rows = /* @__PURE__ */ new Map();
			for (const element of document.querySelectorAll(USER_SEAT_SELECTOR)) {
				const key = element.dataset.chatAnchorKey;
				if (key !== void 0) rows.set(key, element);
			}
			const targets = [];
			for (const key of chat.order) {
				const node = chat.nodes.get(key);
				if (node === void 0 || node.kind !== "user" && node.kind !== "steering") continue;
				const user = node.data;
				if (hiddenSeqs.has(node.anchorSeq ?? user.seq)) continue;
				const actions = (rows.get(key)?.querySelector(ACTIONS_ROOT_SELECTOR))?.lastElementChild;
				if (!(actions instanceof HTMLElement) || actions.querySelector("button") === null) continue;
				targets.push({
					kind: "durable",
					key,
					container: actions,
					seq: user.seq,
					time: user.time,
					preview: messagePreviewOf(user)
				});
			}
			return targets;
		}
		/**
		* The pending bubble row's message text EXCLUDING its trailing actions
		* container. The harness copy button inside that container wraps its label in
		* a Tooltip whose bubble mounts (hover, delayMs=0) as a DOM node inside the
		* row — so the full row `textContent` flips between "message" and
		* "message+Copy" with the mouse. Reading the bubble text from a CLONE (the
		* live row is never touched) keeps the strict equality in `matchPendingRows`
		* stable while the user hovers the action buttons.
		*/
		function bubbleTextOf(row) {
			const clone = row.cloneNode(true);
			clone.lastElementChild?.remove();
			return clone.textContent ?? "";
		}
		/**
		* Collect the portal targets of one session's pending steering bubbles. The
		* retract button is the pre-sent window's counterpart of the durable rewind
		* button: it exists whenever the Host holds the message in its next-step
		* inbox (running or paused), and it retracts through the session's own
		* `updateQueue` channel — no DSH behavior changes.
		*/
		function collectPendingTargets(snapshot) {
			if (snapshot.subagent !== null) return [];
			const steering = snapshot.queue.filter((item) => item.placement === "steering");
			if (steering.length === 0) return [];
			const rows = Array.from(document.querySelectorAll(PENDING_SEAT_SELECTOR));
			const matched = matchPendingRows(rows.map((row) => ({ text: bubbleTextOf(row) })), steering.map((item) => ({
				id: item.id,
				text: item.text
			})));
			const targets = [];
			for (let i = 0; i < matched.length; i++) {
				const itemId = matched[i];
				if (itemId === null) continue;
				const row = rows[i];
				if (row === void 0) continue;
				const actions = (row.matches(ACTIONS_ROOT_SELECTOR) ? row : row.querySelector(ACTIONS_ROOT_SELECTOR))?.lastElementChild;
				if (!(actions instanceof HTMLElement) || actions.querySelector("button") === null) continue;
				const item = steering[i];
				targets.push({
					kind: "pending",
					key: `pending:${itemId}`,
					container: actions,
					itemId,
					text: item.text,
					preview: item.preview
				});
			}
			return targets;
		}
		/** Whether two target lists describe the same portals (order-sensitive). */
		function sameTargets(left, right) {
			return left.length === right.length && left.every((target, index) => {
				const other = right[index];
				if (other === void 0 || target.key !== other.key || target.container !== other.container) return false;
				if (target.kind === "durable") return other.kind === "durable" && target.seq === other.seq;
				return other.kind === "pending" && target.itemId === other.itemId;
			});
		}
		/**
		* True when the snapshot holds a `/rewind` command that should cut the surface
		* (`name=rewind`, not an internal probe — preview / __candidates). Used ONLY to
		* trigger the hiding diagnostic; recognition is deliberately loose so a
		* mis-named or detached outcome still surfaces as the anomaly it is.
		*/
		function hasExecutedRewindCommand(chat) {
			for (const key of chat.order) {
				const node = chat.nodes.get(key);
				if (node === void 0 || node.kind !== "command") continue;
				const command = node.data;
				if (command.name !== "rewind") continue;
				const args = command.args ?? "";
				if (args.includes("preview") || args.includes("__candidates")) continue;
				return true;
			}
			return false;
		}
		/** One-line picture of the hiding path's inputs, for the debug log. */
		function describeHiding(chat, hiddenSeqs) {
			const commands = [];
			for (const key of chat.order) {
				const node = chat.nodes.get(key);
				if (node === void 0 || node.kind !== "command") continue;
				const c = node.data;
				commands.push(`#${c.seq} name=${c.name} outcome=${c.outcome?.kind ?? "-"} marker=${c.outcome?.sourceEventSeq ?? "-"} args=${JSON.stringify(c.args)}`);
			}
			const scoped = hiddenSeqs.size > 0 ? `hidden=[${[...hiddenSeqs].slice(0, 20).join(",")}${hiddenSeqs.size > 20 ? "…" : ""}]` : "";
			let seats = 0;
			let resolved = 0;
			let inHidden = 0;
			for (const seat of document.querySelectorAll(CHAT_SEAT_SELECTOR)) {
				seats += 1;
				const key = seat.dataset.chatAnchorKey;
				const node = key === void 0 ? void 0 : chat.nodes.get(key);
				if (node === void 0) continue;
				resolved += 1;
				if (hiddenSeqs.has(node.anchorSeq)) inHidden += 1;
			}
			return `commands=[${commands.join(" | ")}] ${scoped} seats=${seats} resolved=${resolved} inHidden=${inHidden}`;
		}
		/**
		* Session-scoped portal bridge: renders the ↶ button of every user message
		* row of the session the harness mounts it for. The refresh is coalesced
		* (one pass per mutation batch via queueMicrotask) and diffed (setState is
		* skipped when the target set is unchanged), so the plugin never runs a
		* synchronous full-transcript scan inside a commit microtask.
		*/
		function RewindPortals({ sessionId, sessionOf, chatOf, currentSessionId, t, subscribeLocale, setComposerText }) {
			const [targets, setTargets] = (0, react.useState)([]);
			const hidden = (0, react.useRef)(/* @__PURE__ */ new WeakSet());
			const [, forceRender] = (0, react.useReducer)((count) => count + 1, 0);
			(0, react.useEffect)(() => subscribeLocale(() => {
				forceRender();
			}), [subscribeLocale]);
			(0, react.useLayoutEffect)(() => {
				let active = true;
				let queued = false;
				const refresh = () => {
					if (!active) return;
					const session = sessionOf(sessionId);
					if (session === void 0) {
						setTargets([]);
						return;
					}
					const snapshot = session.getSnapshot();
					const chat = chatOf(session);
					const hiddenSeqs = chat === void 0 ? /* @__PURE__ */ new Set() : hiddenSeqsOf(chat);
					let hiddenCount = 0;
					const hiddenTurns = /* @__PURE__ */ new Set();
					if (chat !== void 0) for (const turn of hiddenTurnsOf(chat, hiddenSeqs)) hiddenTurns.add(String(turn));
					for (const seat of chat === void 0 ? [] : document.querySelectorAll(CHAT_SEAT_SELECTOR)) {
						const key = seat.dataset.chatAnchorKey;
						const anchor = key !== void 0 ? chat?.nodes.get(key)?.anchorSeq : void 0;
						if (anchor !== void 0 && hiddenSeqs.has(anchor)) {
							seat.style.display = "none";
							seat.dataset.dshRewindHidden = "true";
							hidden.current.add(seat);
							hiddenCount += 1;
							const kind = seat.dataset.chatFlowKind;
							const turn = seat.dataset.chatTurn;
							if ((kind === "user" || kind === "steering") && turn !== void 0 && turn !== "") hiddenTurns.add(turn);
						} else if (hidden.current.has(seat)) {
							seat.style.display = "";
							delete seat.dataset.dshRewindHidden;
							hidden.current.delete(seat);
						}
					}
					for (const block of document.querySelectorAll(TRAJECTORY_TURN_SELECTOR)) {
						const turn = block.dataset.turn;
						if (turn !== void 0 && hiddenTurns.has(turn)) {
							if (block.style.display === "none" && hidden.current.has(block)) continue;
							block.style.display = "none";
							block.dataset.dshRewindHidden = "true";
							hidden.current.add(block);
							hiddenCount += 1;
						} else if (hidden.current.has(block) && block.dataset.chatAnchorKey === void 0) {
							block.style.display = "";
							delete block.dataset.dshRewindHidden;
							hidden.current.delete(block);
						}
					}
					if (hiddenSeqs.size > 0 || hiddenCount > 0) console.info(`[dsh-rewind] hiding: ${hiddenCount} rows, seqs [${[...hiddenSeqs].slice(0, 20).join(", ")}${hiddenSeqs.size > 20 ? "…" : ""}]`);
					if (chat !== void 0 && hiddenCount === 0 && hasExecutedRewindCommand(chat)) console.warn(`[dsh-rewind] rewind not hidden: ${describeHiding(chat, hiddenSeqs)}`);
					const next = [...chat === void 0 ? [] : collectTargets(chat, hiddenSeqs), ...collectPendingTargets(snapshot)];
					setTargets((current) => sameTargets(current, next) ? current : next);
				};
				const queueRefresh = () => {
					if (queued || !active) return;
					queued = true;
					queueMicrotask(() => {
						queued = false;
						refresh();
					});
				};
				refresh();
				const observer = new MutationObserver(queueRefresh);
				observer.observe(document.body, {
					childList: true,
					subtree: true,
					attributes: true,
					attributeFilter: ["style"]
				});
				return () => {
					active = false;
					observer.disconnect();
				};
			}, [sessionId, sessionOf]);
			return targets.map((target) => (0, react_dom.createPortal)(target.kind === "pending" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RetractButton, {
				target,
				sessionId,
				sessionOf,
				chatOf,
				setComposerText,
				t
			}, target.key) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RewindButton, {
				target,
				sessionId,
				sessionOf,
				chatOf,
				currentSessionId,
				setComposerText,
				t
			}, target.key), target.container, target.key));
		}
		/** The per-message ↶ button (28px, matching the harness IconActions). */
		function RewindButton({ target, sessionId, sessionOf, chatOf, currentSessionId, setComposerText, t }) {
			const onClick = (event) => {
				event.stopPropagation();
				const session = sessionOf(sessionId);
				if (session === void 0) {
					console.warn("[dsh-rewind] rewind button clicked with no session binding");
					return;
				}
				const node = userNodeOf(chatOf(session), target.key);
				if (node === void 0) return;
				openPopover({
					session,
					chatOf,
					seq: node.seq,
					time: node.time,
					preview: messagePreviewOf(node),
					anchor: event.currentTarget,
					t,
					onRewind: (mode) => {
						runRewindAndFill(session, node.seq, mode, currentSessionId, chatOf, setComposerText);
					}
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				className: CLASS.button,
				"aria-label": t("button.aria"),
				title: t("button.title"),
				onClick,
				dangerouslySetInnerHTML: { __html: REWIND_ICON_SVG }
			});
		}
		/** The current composer draft, on whichever channel: rc.2 textarea `.value`,
		* alpha.1+ contenteditable `textContent`. Empty when the composer is absent.
		* Exported as a test seam (the empty-composer guard in `retractPending`). */
		function composerText() {
			const surface = composerSurface();
			if (surface === null) return "";
			if (surface instanceof HTMLTextAreaElement) return surface.value;
			return surface.textContent ?? "";
		}
		/**
		* Rewind to one pre-sent (pending steering) message, with the same semantics
		* as a durable rewind — "pause first, then roll back to before the target":
		*
		* 1. Pause the running turn (Claude Code's rewind-always-stops-first rule; a
		*    no-op when the agent is already idle). Queued (next-turn) messages are
		*    untouched — the harness QueueDock already offers per-item edit/remove.
		* 2. Retract the target steering message and every steering message after it
		*    (the rollback point's "future"), oldest first, via the session's own
		*    `updateQueue` channel.
		* 3. Put the target's text back in the composer (only when it is empty —
		*    Claude Code's auto-restore guard, so a draft the user is typing is never
		*    clobbered).
		*
		* A removal failure is silently ignored: the realistic failure is
		* `queue-item-not-found` — the message was claimed by the running turn a
		* moment ago, in which case the durable row's regular rewind button takes
		* over with no gap.
		*/
		async function retractPending(session, itemId, text, setComposerText) {
			await session.cancel();
			const steering = session.getSnapshot().queue.filter((item) => item.placement === "steering");
			for (const id of retractSpan(steering, itemId)) await session.updateQueue(id, { kind: "remove" });
			if (text !== null && text !== "" && composerText().trim() === "") setComposerText(session.sessionId, text);
		}
		/** The per-pending-message ↶ button (same visual family as the durable button). */
		function RetractButton({ target, sessionId, sessionOf, chatOf, setComposerText, t }) {
			const onClick = (event) => {
				event.stopPropagation();
				const session = sessionOf(sessionId);
				if (session === void 0) return;
				openPopover({
					session,
					chatOf,
					preview: target.preview,
					anchor: event.currentTarget,
					t,
					retract: {
						itemId: target.itemId,
						text: target.text
					},
					onRetract: () => {
						retractPending(session, target.itemId, target.text, setComposerText);
					}
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				className: CLASS.button,
				"aria-label": t("button.retract.aria"),
				title: t("button.retract.title"),
				onClick,
				dangerouslySetInnerHTML: { __html: REWIND_ICON_SVG }
			});
		}
		/**
		* Build the slot-entry component for the plugin apply(): a tiny bridge that
		* injects the apply-time capabilities (session resolution, locale, rewind
		* runner) into the module-level `RewindPortals`.
		*/
		function createRewindBridge(deps) {
			return function RewindBridge({ sessionId }) {
				return (0, react.createElement)(RewindPortals, {
					sessionId,
					...deps
				});
			};
		}
		//#endregion
		//#region src/client/rewind/locales.ts
		/** `rewind` namespace dictionaries for the client plugin. */
		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"button.aria": "回退到此消息",
			"button.title": "回退",
			"button.retract.aria": "回退到此插话消息",
			"button.retract.title": "回退",
			"popover.title": "回退到这条消息",
			"popover.noText": "（无文本）",
			"popover.retract.title": "回退到这条插话消息",
			"popover.retract.target": "插话中 · {preview}",
			"popover.retract.hint": "将停止当前生成，并回退到该消息之前",
			"popover.retract.confirm": "确认回退",
			"popover.chat": "仅回退对话",
			"popover.chat.hint": "只回退模型上下文，不动工作区文件",
			"popover.both": "回退对话和代码",
			"popover.both.hint": "对话回退并还原工作区文件",
			"popover.checking": "正在检查文件变更…",
			"popover.noChanges": "此消息之后没有可还原的文件变更，仅可回退对话",
			"popover.cancel": "取消",
			"popover.impact.loading": "正在获取影响清单…",
			"popover.impact.failed": "无法获取影响清单：{message}",
			"popover.impact.none": "目标之后没有跟踪到的写类变更，无需还原文件。",
			"popover.impact.restore": "还原 {path}",
			"popover.impact.delete": "删除 {path}",
			"popover.confirm": "确认回退",
			"popover.back": "返回",
			"cleanup.title": "快照清理",
			"cleanup.desc": "dsh-rewind · 管理会话快照备份的自动清理策略",
			"cleanup.expand": "展开",
			"cleanup.collapse": "收起",
			"cleanup.unsaved": "未保存修改",
			"cleanup.auto": "自动清理",
			"cleanup.auto.on": "开启后按不活跃天数自动清理过期会话快照",
			"cleanup.auto.off": "关闭后保留全部快照，不自动清理",
			"cleanup.maxAge": "不活跃时间（天）",
			"cleanup.maxAge.hint": "超过该天数未活动的会话快照会被清理",
			"cleanup.invalid": "仅接受正整数",
			"cleanup.discard": "放弃修改",
			"cleanup.save": "保存",
			"cleanup.saving": "保存中…",
			"cleanup.saved": "已保存并生效",
			"cleanup.saveFailed": "保存失败：{message}",
			"cleanup.readonly": "设置源只读"
		};
		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"button.aria": "Rewind to this message",
			"button.title": "Rewind",
			"button.retract.aria": "Rewind to this pending message",
			"button.retract.title": "Rewind",
			"popover.title": "Rewind to this message",
			"popover.noText": "(no text)",
			"popover.retract.title": "Rewind to this pending message",
			"popover.retract.target": "Pending · {preview}",
			"popover.retract.hint": "Stops the current run and rewinds to before this message",
			"popover.retract.confirm": "Confirm rewind",
			"popover.chat": "Rewind conversation only",
			"popover.chat.hint": "Cut the model context only; workspace files stay untouched",
			"popover.both": "Rewind conversation and code",
			"popover.both.hint": "Cut the context and restore workspace files",
			"popover.checking": "Checking for file changes…",
			"popover.noChanges": "No tracked file changes after this message; conversation-only rewind",
			"popover.cancel": "Cancel",
			"popover.impact.loading": "Fetching impact list…",
			"popover.impact.failed": "Could not fetch the impact list: {message}",
			"popover.impact.none": "No tracked file changes after the target; nothing to restore.",
			"popover.impact.restore": "Restore {path}",
			"popover.impact.delete": "Delete {path}",
			"popover.confirm": "Confirm rewind",
			"popover.back": "Back",
			"cleanup.title": "Snapshot cleanup",
			"cleanup.desc": "dsh-rewind · Manage the auto-cleanup policy of session snapshot backups",
			"cleanup.expand": "Expand",
			"cleanup.collapse": "Collapse",
			"cleanup.unsaved": "Unsaved changes",
			"cleanup.auto": "Auto cleanup",
			"cleanup.auto.on": "When enabled, session snapshots idle past the cutoff are cleaned automatically",
			"cleanup.auto.off": "When disabled, all snapshot backups are kept; nothing is cleaned automatically.",
			"cleanup.maxAge": "Idle time (days)",
			"cleanup.maxAge.hint": "Snapshot backups of sessions idle longer than this many days are cleaned",
			"cleanup.invalid": "A positive integer only",
			"cleanup.discard": "Discard changes",
			"cleanup.save": "Save",
			"cleanup.saving": "Saving…",
			"cleanup.saved": "Saved and applied",
			"cleanup.saveFailed": "Save failed: {message}",
			"cleanup.readonly": "Read-only settings source"
		};
		//#endregion
		//#region src/client/rewind/settings-card.tsx
		/**
		* dsh-rewind client settings card: the "Snapshot cleanup" module under
		* Settings > Plugins > Plugin configuration, drawn as one `settings.plugin.item`
		* card (keyed by the host-registered settings namespace).
		*
		* The card edits exactly two knobs — `enabled` (auto-cleanup switch) and
		* `maxAgeDays` (idle cutoff, a positive integer) — and stages them exactly like
		* the host-side /snapshot-auto-cleanup command does, so the GUI and the command
		* can never disagree. The switch collapses/expands the max-age editor; a
		* non-positive/non-integer draft blocks save (the same single validator the
		* host schema enforces). "Discard changes" restores the last-read baseline.
		*
		* It neither imports the client settings typed contract nor depends on the
		* alpha-only `mutate` write API: it reads `getSnapshot().value` and writes via
		* the `set(field, value)` method present on both rc.2 and alpha, and the card
		* receives a tiny structural `CleanupCardApi` supplied by `src/client/index.ts`
		* so the component stays harness-agnostic and unit-testable in isolation.
		*
		* @module dsh-rewind/client/settings-card
		*/
		/**
		* The dsh-settings namespace the card binds to. Duplicated here (not imported
		* from the host module) because the client build must stay free of host/node
		* imports; a cross-config test pins it equal to the host's constant. The
		* settings grammar forbids dots, so this is hyphenated.
		*/
		const CLEANUP_SETTINGS_NAMESPACE = "dsh-rewind-snapshot-cleanup";
		/** Load a draft from a policy (defaults when the view has not loaded). */
		function draftFrom(policy) {
			return {
				enabled: policy?.enabled ?? false,
				maxAgeDays: String(policy?.maxAgeDays ?? "")
			};
		}
		/** Parse the max-age text: a strict positive integer, else `null`. */
		function maxAgeOf(text) {
			const trimmed = text.trim();
			if (!/^\d+$/.test(trimmed)) return null;
			const days = Number(trimmed);
			return Number.isSafeInteger(days) && days > 0 ? days : null;
		}
		/**
		* The policy a draft resolves to, or `null` when the max-age draft is invalid
		* (which blocks save). `enabled` is always a boolean from the switch, and
		* `maxAgeDays` comes from the validated draft.
		*/
		function configOf(draft) {
			const days = maxAgeOf(draft.maxAgeDays);
			if (days === null) return null;
			return {
				enabled: draft.enabled,
				maxAgeDays: days
			};
		}
		/** True when the draft differs from the baseline (an unsaved edit). */
		function dirtyOf(base, draft) {
			return base.enabled !== draft.enabled || base.maxAgeDays !== draft.maxAgeDays;
		}
		/**
		* The card body. Draws the switch (+ collapse), the max-age editor, and the
		* discard/save actions. Pure of host wiring: everything goes through the
		* supplied {@link CleanupCardApi}.
		* @param api - the read/write transport.
		* @param t - the client dictionary translator.
		* @returns the card element.
		*/
		function SettingsCleanupCard({ api, t }) {
			const [open, setOpen] = (0, react.useState)(false);
			const [baseline, setBaseline] = (0, react.useState)(() => draftFrom(api.read()));
			const [draft, setDraft] = (0, react.useState)(() => draftFrom(api.read()));
			const [busy, setBusy] = (0, react.useState)(false);
			const [error, setError] = (0, react.useState)(null);
			const writable = api.writable();
			(0, react.useEffect)(() => api.subscribe(() => {
				const next = draftFrom(api.read());
				setBaseline((base) => {
					setDraft((cur) => dirtyOf(base, cur) ? cur : next);
					return next;
				});
			}), [api]);
			const dirty = dirtyOf(baseline, draft);
			const invalid = maxAgeOf(draft.maxAgeDays) === null;
			const disabled = busy || !writable;
			const edit = (patch) => {
				setDraft((cur) => ({
					...cur,
					...patch
				}));
				setError(null);
			};
			const save = async () => {
				if (busy || !writable || !dirty) return;
				const next = configOf(draft);
				if (next === null) {
					setError(t("cleanup.invalid"));
					return;
				}
				setBusy(true);
				setError(null);
				try {
					await api.save(next);
					setBaseline(draft);
					setError(null);
				} catch (e) {
					setError(t("cleanup.saveFailed", { message: e instanceof Error ? e.message : String(e) }));
				} finally {
					setBusy(false);
				}
			};
			const discard = () => {
				if (busy) return;
				setDraft(baseline);
				setError(null);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
				className: `dsh-rewind-cleanup-card${open ? " dsh-rewind-cleanup-card-open" : ""}`,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "dsh-rewind-cleanup-header",
					"aria-expanded": open,
					"aria-label": `${t(open ? "cleanup.collapse" : "cleanup.expand")}: ${t("cleanup.title")}`,
					onClick: () => setOpen(!open),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "dsh-rewind-cleanup-head-text",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "dsh-rewind-cleanup-name",
								children: t("cleanup.title")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "dsh-rewind-cleanup-desc",
								children: t("cleanup.desc")
							})]
						}),
						dirty ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "dsh-rewind-cleanup-pending",
							children: t("cleanup.unsaved")
						}) : null,
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
							className: `dsh-rewind-cleanup-chevron${open ? " dsh-rewind-cleanup-chevron-open" : ""}`,
							width: "14",
							height: "14",
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								d: "M4 6l4 4 4-4",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})
					]
				}), open ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-rewind-cleanup-body",
					children: [
						!writable ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "dsh-rewind-cleanup-readonly",
							role: "status",
							children: t("cleanup.readonly")
						}) : null,
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-rewind-cleanup-permission",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-rewind-cleanup-toggle-row",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "dsh-rewind-cleanup-toggle-label",
									id: "dsh-rewind-cleanup-enabled-label",
									children: t("cleanup.auto")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									role: "switch",
									className: `dsh-rewind-cleanup-switch${draft.enabled ? " dsh-rewind-cleanup-switch-on" : ""}`,
									"aria-checked": draft.enabled,
									"aria-labelledby": "dsh-rewind-cleanup-enabled-label",
									disabled,
									onClick: () => edit({ enabled: !draft.enabled }),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "dsh-rewind-cleanup-thumb" })
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "dsh-rewind-cleanup-hint",
								children: t(draft.enabled ? "cleanup.auto.on" : "cleanup.auto.off")
							})]
						}),
						draft.enabled ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-rewind-cleanup-field",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "dsh-rewind-cleanup-head",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
										className: "dsh-rewind-cleanup-label",
										htmlFor: "dsh-rewind-cleanup-maxage",
										children: t("cleanup.maxAge")
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									className: `dsh-rewind-cleanup-input${invalid ? " dsh-rewind-cleanup-input-invalid" : ""}`,
									type: "text",
									inputMode: "numeric",
									id: "dsh-rewind-cleanup-maxage",
									value: draft.maxAgeDays,
									disabled,
									"aria-invalid": invalid || void 0,
									placeholder: String(30),
									onChange: (e) => edit({ maxAgeDays: e.target.value })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: invalid ? "dsh-rewind-cleanup-error" : "dsh-rewind-cleanup-hint",
									children: invalid ? t("cleanup.invalid") : t("cleanup.maxAge.hint")
								})
							]
						}) : null,
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-rewind-cleanup-footer",
							children: [
								error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "dsh-rewind-cleanup-failed",
									role: "status",
									children: error
								}) : null,
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: "dsh-rewind-cleanup-discard",
									disabled: !dirty || busy || !writable,
									onClick: discard,
									children: t("cleanup.discard")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: "dsh-rewind-cleanup-save",
									disabled: !dirty || busy || !writable || invalid,
									onClick: save,
									children: busy ? t("cleanup.saving") : t("cleanup.save")
								})
							]
						})
					]
				}) : null]
			});
		}
		//#endregion
		//#region src/client/rewind/index.ts
		const NS = "rewind";
		/** The slot the session-scoped rewind bridge registers into (harness-declared). */
		const HEADER_ACTIONS_SLOT = "conversation.session.header.actions";
		/**
		* The composer's text surface, whichever harness version is running: rc.2 is a
		* `<textarea>`, 0.1.2-alpha.1+ is a Lexical `contenteditable` div. The
		* `/rewind` text-flow anchor must point at whichever exists, so the popup
		* positions correctly on both channels.
		*/
		const COMPOSER_TEXTAREA_SELECTOR = "[data-input-scroll] textarea, textarea[data-phase]";
		const COMPOSER_EDITABLE_SELECTOR = "[data-composer-input]";
		/**
		* Client plugin body: command decoration + parameterized guard + locale + the
		* portal bridge.
		* @param ctx - client root context carrying `slots`, `sessions`, `locale` and `commandUi`.
		*/
		function apply$1(ctx) {
			ctx.effect(function* () {
				yield ctx.locale.register(NS, {
					zh,
					en
				});
				const t = ctx.locale.bind(NS);
				const style = document.createElement("style");
				style.dataset.plugin = "dsh-rewind";
				style.textContent = STYLE;
				document.head.appendChild(style);
				const sessionOf = (sessionId) => ctx.sessions.binding(sessionId)?.session;
				const currentSessionId = () => ctx.sessions.list.getSnapshot().current;
				const subscribeLocale = (cb) => ctx.locale.subscribe(cb);
				/**
				* The alpha.1+ chat channel: the `uiConversation` service (contributed by
				* dsh-client-ui-conversation; dsh-client-ui-chat registers its named
				* "chat" view through the uiSession slot hook). Resolved lazily through
				* `ctx.get` — the harness's own consumer pattern — so the read returns
				* undefined on rc.2, where the service does not exist (see the `inject`
				* note above for why it is not a declared dependency). Re-read on every
				* call: services restart under the live-reload profile patcher.
				*/
				const uiConversation = () => ctx.get("uiConversation");
				/** The named chat view in the alpha.1+ uiConversation registry. */
				const CHAT_VIEW = "chat";
				/**
				* The live chat snapshot of a session, or undefined when unavailable.
				* Dual channel (see `chatSnapshotOf`): the rc.2 session-face snapshot
				* first, then the alpha.1+ `uiConversation` "chat" view.
				* `uiConversation.binding` throws for a session it does not know (a
				* teardown window) — degrade to "no chat" instead of failing the caller.
				*/
				const chatOf = (session) => {
					if (session === void 0) return void 0;
					try {
						const view = uiConversation()?.binding(session.sessionId).target(CHAT_VIEW);
						return chatSnapshotOf(session, view);
					} catch {
						return;
					}
				};
				/**
				* The alpha.1+ composer channel: the `conversation` service's `input`
				* resolver (`SessionInputResolver`) through which `setDraft` replaces the
				* whole composer draft (the harness's own Lexical editor — the correct
				* semantics, not a DOM hack). Resolved lazily through `ctx.get` so the
				* read is undefined on rc.2, where the service does not exist;
				* `sessions.scope` is likewise absent on rc.2. Wrapped in the
				* `writeComposer` dual channel: the alpha.1 facade when reachable, else
				* the rc.2 textarea / alpha.1 contenteditable DOM fill. Never throws.
				*/
				const setComposerText = (sessionId, text) => {
					const input = ctx.get("conversation")?.input;
					const scope = ctx.sessions.scope?.(sessionId);
					return writeComposer(text, input !== void 0 && scope !== void 0 ? { setDraft: (draft) => {
						input.for(scope).setDraft(draft);
					} } : void 0);
				};
				const slots = ctx.slots;
				yield slots.inject(HEADER_ACTIONS_SLOT, () => slots.register({
					name: HEADER_ACTIONS_SLOT,
					id: "dsh-rewind-portals",
					order: 1e3
				}, createRewindBridge({
					sessionOf,
					chatOf,
					currentSessionId,
					setComposerText,
					t,
					subscribeLocale
				})));
				ctx.inject(["settingsScope"], (scoped) => {
					try {
						const scope = scoped.settingsScope.bind({ namespace: CLEANUP_SETTINGS_NAMESPACE });
						const cardApi = {
							read: () => {
								const value = scope.getSnapshot().value;
								return value === void 0 ? void 0 : {
									enabled: value.enabled,
									maxAgeDays: value.maxAgeDays
								};
							},
							writable: () => {
								return scope.getSnapshot().writable === true;
							},
							save: async (next) => {
								await scope.set("enabled", next.enabled);
								await scope.set("maxAgeDays", next.maxAgeDays);
							},
							subscribe: (cb) => scope.subscribe(cb)
						};
						scoped.slots.inject("settings.plugin.item", () => scoped.slots.register({
							name: "settings.plugin.item",
							key: CLEANUP_SETTINGS_NAMESPACE,
							locale: NS,
							inject: () => ({
								t,
								api: cardApi
							})
						}, SettingsCleanupCard));
					} catch (error) {
						console.error("[dsh-rewind] settings card register failed:", error);
					}
				});
				const commandUi = ctx.get("commandUi");
				/** True when the surface has at least one reachable rewind target. */
				const hasCandidates = (sessionId) => {
					const face = sessionId === void 0 ? void 0 : sessionOf(sessionId);
					const chat = chatOf(face);
					return chat !== void 0 && rewindCandidatesOfChat(chat).length > 0;
				};
				/**
				* Fetch the FULL candidate list from the host through the internal
				* `__candidates` command. The host derives it from its complete surface +
				* event log, so it lists every reachable rewind target — not just the
				* already-loaded history window. Returns undefined when the command was
				* not matched or never settled.
				*/
				const fetchHostCandidates = async (face, chatOf) => {
					const known = knownCommandSeqs(face, chatOf, (node) => isCandidateCommand(node));
					const result = await face.command("/rewind __candidates");
					if (!result.ok || result.value?.matched !== true) return void 0;
					const outcome = await waitForCommand(face, chatOf, (node) => isCandidateCommand(node) && !known.has(node.seq));
					if (outcome === null || outcome.kind !== "success" || outcome.text === void 0) return void 0;
					return rewindCandidatesFromHostText(outcome.text);
				};
				const hostCandidatesCache = /* @__PURE__ */ new Map();
				/** The composer card the mode popover anchors to (the text flow has no button). */
				const composerAnchor = () => {
					const surface = composerSurface();
					return surface?.closest("[data-composer-card]") ?? surface ?? document.body;
				};
				const rewindPopupSpec = {
					available: (session) => hasCandidates(session.sessionId),
					ui: {
						kind: "popupSelect",
						options: async (session) => {
							const face = sessionOf(session.sessionId);
							if (face === void 0) return [];
							const candidates = await fetchHostCandidates(face, chatOf);
							if (candidates !== void 0) hostCandidatesCache.set(session.sessionId, candidates);
							return candidates === void 0 ? [] : rewindOptionsFromCandidates(candidates, t);
						},
						onSelect: (option, session) => {
							const face = sessionOf(session.sessionId);
							if (face === void 0) return;
							const candidate = hostCandidatesCache.get(session.sessionId)?.find((candidate) => candidate.seq === Number(option.id));
							if (candidate === void 0) return;
							openPopover({
								session: face,
								chatOf,
								seq: candidate.seq,
								time: candidate.time,
								preview: candidate.preview,
								anchor: composerAnchor(),
								t,
								onRewind: (mode) => {
									runRewindAndFill(face, candidate.seq, mode, currentSessionId, chatOf, setComposerText);
								}
							});
						}
					}
				};
				for (const name of ["rewind", "undo"]) yield commandUi.decorate({
					name,
					...rewindPopupSpec
				});
				/** The composer's text-holding element: rc.2 `<textarea>` or alpha.1+ contenteditable. */
				const composerSurface = () => document.querySelector(COMPOSER_TEXTAREA_SELECTOR) ?? document.querySelector(COMPOSER_EDITABLE_SELECTOR);
				yield () => {
					style.remove();
				};
			}, "dsh-rewind client lifecycle");
		}
		//#endregion
		//#region src/client/index.ts
		/**
		* System-prompt settings page, browser half — one settings section over the
		* Host `system-prompt` namespace. The page edits the deployment identity
		* fragment; tool-guidance sections stay independently registered.
		*/
		/** Required services (cordis fiber inject). */
		const inject = [
			"slots",
			"locale",
			"settingsScope"
		];
		/**
		* Mount the system-prompt settings page.
		* @param ctx - the browser plugin context.
		*/
		function apply(ctx) {
			const form = new PersonaForm(ctx.settingsScope.bind({ namespace: SYSTEM_PROMPT_SETTINGS_NS }));
			const actions = form.actions();
			ctx.effect(() => ctx.locale.register("settings.dshSystemPrompt", {
				zh: zh$1,
				en: en$1
			}), "dsh-system-prompt: dictionaries");
			const sectionInjected = () => ({
				hooks: { systemPromptSection: form.store },
				edit: actions.edit,
				reset: actions.reset,
				save: actions.save,
				discard: actions.discard
			});
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "dsh-system-prompt",
				order: 5,
				label: () => ctx.locale.bind("settings.dshSystemPrompt")("nav"),
				locale: "settings.dshSystemPrompt",
				inject: sectionInjected
			}, SystemPromptSection));
			ctx.inject(["sessions", "commandUi"], (scoped) => {
				apply$1(scoped);
			});
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map