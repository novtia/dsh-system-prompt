/** The system-prompt settings section: a staged textarea over the deployment persona. */

import type { SnapshotStore } from '@deepseek-ai/dsh-client-store'
import { Button } from '@deepseek-ai/dsh-client-ui-primitives'
import type { PersonaFormState } from './persona-form.ts'
import css from './SystemPromptSection.module.css'

type SystemPromptSectionProps = {
  useSystemPromptSection: (selector: (snapshot: PersonaFormState) => PersonaFormState) => PersonaFormState
  t: (key: string) => string
  edit: (text: string) => void
  reset: () => void
  save: () => void
  discard: () => void
}

/** Registration-side business face for the system-prompt page. */
export interface SystemPromptSectionInjected {
  hooks: {
    /** Page snapshot bound by the renderer as useSystemPromptSection. */
    systemPromptSection: SnapshotStore<PersonaFormState>
  }
  /** Stage draft text. */
  edit: (text: string) => void
  /** Stage a clear so saving restores the composition persona. */
  reset: () => void
  /** Write the staged edit. */
  save: () => void
  /** Drop the staged edit. */
  discard: () => void
}

/**
 * Render the system-prompt settings page.
 * @param props - composed slot props.
 * @returns the section element tree.
 */
export function SystemPromptSection(props: SystemPromptSectionProps) {
  const { useSystemPromptSection, t, edit, reset, save, discard } = props
  const state = useSystemPromptSection(snapshot => snapshot)
  const disabled = !state.writable || !state.available || state.saving
  const saveBlocked = disabled || !state.dirty
  return (
    <div className={css.section}>
      <h2 className={css.title}>{t('title')}</h2>
      <p className={css.intro}>{t('intro')}</p>
      {!state.available
        ? <p className={css.status} role="status">{t('unavailable')}</p>
        : !state.writable
          ? <p className={css.status} role="status">{t('readOnly')}</p>
          : null}
      <div className={css.head}>
        <label className={css.label} htmlFor="dsh-system-prompt-persona">{t('label')}</label>
        {state.overridden
          ? (
            <span className={css.badges}>
              <span className={css.badge}>{t('overridden')}</span>
              <button
                type="button"
                className={css.reset}
                disabled={disabled}
                onClick={reset}
              >
                {t('reset')}
              </button>
            </span>
          )
          : null}
      </div>
      <textarea
        id="dsh-system-prompt-persona"
        className={css.textarea}
        value={state.text}
        disabled={disabled}
        rows={16}
        spellCheck={false}
        onChange={(event) => { edit(event.target.value) }}
      />
      <p className={css.hint}>{t('hint')}</p>
      <div className={css.footer}>
        {state.failed ? <p className={css.failed} role="status">{t('saveFailed')}</p> : null}
        <Button
          variant="outline"
          size="sm"
          disabled={!state.dirty || state.saving || !state.available}
          onClick={discard}
        >
          {t('discard')}
        </Button>
        <Button
          variant="primary"
          size="sm"
          disabled={saveBlocked}
          onClick={save}
        >
          {t(state.saving ? 'saving' : 'save')}
        </Button>
      </div>
    </div>
  )
}
