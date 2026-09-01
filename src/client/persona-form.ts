/**
 * Staged editor over the `system-prompt` settings namespace.
 *
 * Empty draft text is a real override (`set` of `''`), not a clear. Reset
 * stages an unset so saving restores composition and each preset identity.
 */

import { createSnapshotStore, type SnapshotStore } from '@deepseek-ai/dsh-client-store'
import type { SettingsScope, SettingsScopeSnapshot } from '@deepseek-ai/dsh-client-ui-settings/client'

/**
 * Namespace of the system-prompt user-owned settings. Spelled here rather than
 * imported: a client package must not depend on a Host package.
 */
export const SYSTEM_PROMPT_SETTINGS_NS = 'system-prompt'

/** The system-prompt fields this page edits. */
export interface SystemPromptSettings {
  /** User-layer replacement for composition and preset identity text. */
  persona?: string
}

/** Page state the section renders. */
export interface PersonaFormState {
  /** False while the namespace is not served to this client. */
  available: boolean
  /** Whether the Host document accepts writes. */
  writable: boolean
  /** Whether the form holds edits that a save would write. */
  dirty: boolean
  /** Whether a save is crossing the wire. */
  saving: boolean
  /** Whether the last save did not land as staged; cleared by the next edit or save. */
  failed: boolean
  /** Draft text the textarea renders. */
  text: string
  /** Whether saving would leave a user-layer persona entry. */
  overridden: boolean
}

/** The write actions the section injects. */
export interface PersonaFormActions {
  /** Stage draft text. */
  edit: (text: string) => void
  /** Stage a clear so saving unsets the overlay. */
  reset: () => void
  /** Write the staged edit, then re-seed from what the Host accepted. */
  save: () => void
  /** Drop the staged edit. */
  discard: () => void
}

/** One staged edit. */
interface StagedEdit {
  /** Draft text the textarea renders. */
  text: string
  /** True when this edit clears the field whatever text it shows. */
  clear: boolean
}

/**
 * Stages persona edits over the system-prompt namespace and writes them on save.
 */
export class PersonaForm {
  /** Page snapshot the section renderer subscribes to. */
  readonly store: SnapshotStore<PersonaFormState>
  private staged: StagedEdit | undefined
  private saving = false
  private failed = false

  /**
   * @param scope - the bound settings scope for `system-prompt`.
   */
  constructor(private readonly scope: SettingsScope<SystemPromptSettings>) {
    this.store = createSnapshotStore(this.project())
    scope.subscribe(() => { this.publish() })
  }

  /**
   * Build the edit, reset, save, and discard actions bound to this form.
   * @returns the actions the section's slot entry injects.
   */
  actions(): PersonaFormActions {
    return {
      edit: (text) => { this.stage({ text, clear: false }) },
      reset: () => {
        this.stage({ text: this.baseText(), clear: true })
      },
      save: () => { void this.save() },
      discard: () => {
        if (this.staged === undefined && !this.failed) return
        this.staged = undefined
        this.failed = false
        this.publish()
      },
    }
  }

  /**
   * Write the staged edit, then re-seed from what the Host accepted.
   * @returns settlement after the write and the read-back.
   */
  async save(): Promise<void> {
    const write = this.plan()
    if (write === undefined || this.saving) return
    this.saving = true
    this.failed = false
    this.publish()
    const landed = await write()
    if (landed) this.staged = undefined
    this.saving = false
    this.failed = !landed
    this.publish()
  }

  private project(): PersonaFormState {
    const snapshot = this.scope.getSnapshot()
    const stored = this.stored()
    const current = this.sectionText()
    const staged = this.staged
    if (staged === undefined) {
      return {
        available: snapshot.status === 'ready',
        writable: snapshot.writable,
        dirty: false,
        saving: this.saving,
        failed: this.failed,
        text: current,
        overridden: stored,
      }
    }
    return {
      available: snapshot.status === 'ready',
      writable: snapshot.writable,
      dirty: staged.clear ? stored : staged.text !== current,
      saving: this.saving,
      failed: this.failed,
      text: staged.text,
      overridden: staged.clear ? false : true,
    }
  }

  private plan(): (() => Promise<boolean>) | undefined {
    const staged = this.staged
    if (staged === undefined) return undefined
    if (staged.clear) {
      return this.stored() ? () => this.clear() : undefined
    }
    if (staged.text === this.sectionText()) return undefined
    return () => this.storeField(staged.text)
  }

  private async clear(): Promise<boolean> {
    await this.scope.unset('persona')
    return !this.stored()
  }

  private async storeField(value: string): Promise<boolean> {
    await this.scope.set('persona', value)
    return this.userLayer()?.persona === value
  }

  private stage(edit: StagedEdit): void {
    this.staged = edit
    this.failed = false
    this.publish()
  }

  private snapshotOf(): SettingsScopeSnapshot<SystemPromptSettings> {
    return this.scope.getSnapshot()
  }

  private sectionText(): string {
    const value = this.snapshotOf().value?.persona
    return typeof value === 'string' ? value : ''
  }

  private baseText(): string {
    const persona = (this.snapshotOf().base as SystemPromptSettings | undefined)?.persona
    return typeof persona === 'string' ? persona : ''
  }

  private userLayer(): Record<string, unknown> | undefined {
    const user = this.snapshotOf().user
    return user !== null && typeof user === 'object' ? user as Record<string, unknown> : undefined
  }

  private stored(): boolean {
    const user = this.userLayer()
    return user !== undefined && Object.hasOwn(user, 'persona')
  }

  private publish(): void {
    this.store.set(this.project())
  }
}
