/**
 * System-prompt settings page, browser half — one settings section over the
 * Host `system-prompt` namespace. The page edits the deployment identity
 * fragment; tool-guidance sections stay independently registered.
 */

import { SystemPromptSection } from './SystemPromptSection.tsx'
import type { SystemPromptSectionInjected } from './SystemPromptSection.tsx'
import { PersonaForm, SYSTEM_PROMPT_SETTINGS_NS, type SystemPromptSettings } from './persona-form.ts'
import { en, zh } from './locales.ts'
import type { SettingsScope } from '@deepseek-ai/dsh-client-ui-settings/client'

interface ClientApplyContext {
  effect(callback: () => () => void, label?: string): void
  locale: {
    register(namespace: string, dictionaries: { zh: typeof zh; en: typeof en }): () => void
    bind(namespace: string): (key: string) => string
  }
  settingsScope: {
    bind(request: { namespace: string }): SettingsScope<SystemPromptSettings>
  }
  slots: {
    inject(name: string, factory: () => unknown): unknown
    register(entry: {
      name: string
      id: string
      order: number
      label: () => string
      locale: string
      inject: () => SystemPromptSectionInjected
    }, component: typeof SystemPromptSection): unknown
  }
}

/** Required services (cordis fiber inject). */
export const inject = ['slots', 'locale', 'settingsScope']

/**
 * Mount the system-prompt settings page.
 * @param ctx - the browser plugin context.
 */
export function apply(ctx: ClientApplyContext): void {
  const form = new PersonaForm(ctx.settingsScope.bind({ namespace: SYSTEM_PROMPT_SETTINGS_NS }))
  const actions = form.actions()

  ctx.effect(() => ctx.locale.register('settings.dshSystemPrompt', { zh, en }), 'dsh-system-prompt: dictionaries')

  const sectionInjected = (): SystemPromptSectionInjected => ({
    hooks: { systemPromptSection: form.store },
    edit: actions.edit,
    reset: actions.reset,
    save: actions.save,
    discard: actions.discard,
  })

  ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section',
    id: 'dsh-system-prompt',
    order: 5,
    label: () => ctx.locale.bind('settings.dshSystemPrompt')('nav'),
    locale: 'settings.dshSystemPrompt',
    inject: sectionInjected,
  }, SystemPromptSection))
}
