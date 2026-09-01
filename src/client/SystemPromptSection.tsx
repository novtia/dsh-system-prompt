/** The system-prompt settings section: a staged textarea over the deployment persona. */

import type { SnapshotStore } from '@deepseek-ai/dsh-client-store'
import { Button } from '@deepseek-ai/dsh-client-ui-primitives'
import type { PersonaFormState } from './persona-form.ts'
import type { SuppressState } from './suppress-form.ts'
import css from './SystemPromptSection.module.css'

type SystemPromptSectionProps = {
  useSystemPromptSection: (selector: (snapshot: PersonaFormState) => PersonaFormState) => PersonaFormState
  useBuiltinSuppress: (selector: (snapshot: SuppressState) => SuppressState) => SuppressState
  t: (key: string) => string
  edit: (text: string) => void
  reset: () => void
  save: () => void
  discard: () => void
  toggleSuppress: () => void
}

/** Registration-side business face for the system-prompt page. */
export interface SystemPromptSectionInjected {
  hooks: {
    /** Page snapshot bound by the renderer as useSystemPromptSection. */
    systemPromptSection: SnapshotStore<PersonaFormState>
    /** Switch snapshot bound by the renderer as useBuiltinSuppress. */
    builtinSuppress: SnapshotStore<SuppressState>
  }
  /** Stage draft text. */
  edit: (text: string) => void
  /** Stage a clear so saving restores the composition persona. */
  reset: () => void
  /** Write the staged edit. */
  save: () => void
  /** Drop the staged edit. */
  discard: () => void
  /** Persist the opposite of the current hide-defaults flag. */
  toggleSuppress: () => void
}

/**
 * Render the system-prompt settings page.
 * @param props - composed slot props.
 * @returns the section element tree.
 */
export function SystemPromptSection(props: SystemPromptSectionProps) {
  const {
    useSystemPromptSection, useBuiltinSuppress, t,
    edit, reset, save, discard, toggleSuppress,
  } = props
  const state = useSystemPromptSection(snapshot => snapshot)
  const suppress = useBuiltinSuppress(snapshot => snapshot)
  const disabled = !state.writable || !state.available || state.saving
  const saveBlocked = disabled || !state.dirty
  const suppressDisabled = !suppress.writable || !suppress.available || suppress.saving
  return (
    <div className={css.section}>
      <h2 className={css.title}>{t('title')}</h2>
      <p className={css.intro}>{t('intro')}</p>
      {!state.available
        ? <p className={css.status} role="status">{t('unavailable')}</p>
        : !state.writable
          ? <p className={css.status} role="status">{t('readOnly')}</p>
          : null}
      <div className={css.suppress}>
        <div className={css.suppressRow}>
          <span className={css.suppressLabel} id="dsh-system-prompt-suppress-label">{t('suppress')}</span>
          <button
            type="button"
            role="switch"
            className={suppress.on ? `${css.switch} ${css.switchOn}` : css.switch}
            aria-checked={suppress.on}
            aria-labelledby="dsh-system-prompt-suppress-label"
            disabled={suppressDisabled}
            onClick={toggleSuppress}
          >
            <span className={css.switchThumb} />
          </button>
        </div>
        <p className={css.hint}>{t('suppressHint')}</p>
        {suppress.on
          ? <span className={css.badge}>{t('suppressOn')}</span>
          : <span className={css.badge}>{t('suppressOff')}</span>}
      </div>
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
