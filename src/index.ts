/**
 * Overlay the `deployment:persona` section from the user-layer
 * `system-prompt.persona` setting on every assemble, including agent-preset
 * scopes. Registers the settings namespace when the composed harness has not.
 */

import type { Context } from '@deepseek-ai/cordis'
import z from '@deepseek-ai/schemastery'

/** Cordis plugin name. */
export const name = 'dsh-system-prompt'

/** Prompt registry must exist before the waterfall can wrap assemble. */
export const inject = ['systemPrompt']

const PERSONA_SECTION = 'deployment:persona'
const SETTINGS_NS = 'system-prompt'

const SettingsSchema = z.object({
  persona: z.string().default(''),
})

interface AssembledSection {
  name: string
  text: string
}

interface PromptAssembly {
  sections: AssembledSection[]
  contexts: unknown
  tools: unknown
  variables: unknown
}

interface SettingsDescriptor {
  ns: unknown
  user?: unknown
}

interface SettingsService {
  describe(): SettingsDescriptor[]
  installSection(
    owner: Context,
    ns: string,
    schema: typeof SettingsSchema,
    entry: { persona: string },
    hooks: {
      setSource: (current: () => { persona: string }) => void
      onChange: () => void
    },
  ): void
}

/**
 * Stored user-layer persona when `system-prompt.persona` is present.
 * @param ctx - the plugin context.
 * @returns the overlay, `''` to hide identity, or `undefined` to leave composition and each preset.
 */
function userPersonaOverlay(ctx: Context): string | undefined {
  const settings = ctx.get('settings') as SettingsService | undefined
  if (settings === undefined) return undefined
  const descriptor = settings.describe().find(row => String(row.ns) === SETTINGS_NS)
  const user = descriptor?.user
  if (user === undefined || typeof user !== 'object' || user === null) return undefined
  if (!Object.hasOwn(user, 'persona')) return undefined
  const persona = (user as { persona: unknown }).persona
  return typeof persona === 'string' ? persona : undefined
}

/**
 * Replace or drop the identity section for a stored overlay.
 * @param sections - assembled sections in registry order.
 * @param overlay - stored persona text, including `''`.
 * @returns a new sections array.
 */
function applyOverlay(sections: readonly AssembledSection[], overlay: string): AssembledSection[] {
  const index = sections.findIndex(section => section.name === PERSONA_SECTION)
  if (overlay === '') {
    if (index < 0) return [...sections]
    return [...sections.slice(0, index), ...sections.slice(index + 1)]
  }
  if (index >= 0) {
    const next = [...sections]
    next[index] = { ...next[index], text: overlay }
    return next
  }
  const identity = sections.findIndex(section => section.name === 'harness:identity')
  const insertAt = identity >= 0 ? identity + 1 : 0
  return [
    ...sections.slice(0, insertAt),
    { name: PERSONA_SECTION, text: overlay },
    ...sections.slice(insertAt),
  ]
}

/**
 * Install the settings namespace when missing, then overlay persona on assemble.
 * @param ctx - the plugin context after `systemPrompt` is available.
 */
export function apply(ctx: Context): void {
  ctx.inject(['settings'], (settingsCtx) => {
    const settings = settingsCtx.get('settings') as SettingsService | undefined
    if (settings === undefined) return
    try {
      settings.installSection(ctx, SETTINGS_NS, SettingsSchema, { persona: '' }, {
        setSource: () => {},
        onChange: () => {},
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      if (!message.includes('already registered')) throw error
    }
  })

  type AssembleListener = (
    assembly: PromptAssembly,
    context: unknown,
    next: () => Promise<PromptAssembly>,
  ) => Promise<PromptAssembly>
  ctx.on(
    'system-prompt/assemble' as never,
    (async (assembly, _context, next) => {
      const result = await next()
      const overlay = userPersonaOverlay(ctx)
      if (overlay === undefined) return result
      return { ...result, sections: applyOverlay(result.sections, overlay) }
    }) as AssembleListener as never,
  )
}
