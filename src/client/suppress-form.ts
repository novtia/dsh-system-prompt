/**
 * Immediate switch over the plugin-owned `dsh-system-prompt` namespace.
 *
 * A stored `suppressBuiltin: true` drops every assembled prompt section except
 * a non-empty user-layer persona overlay. The write is not staged: toggling
 * persists on the next click so the following model step already hides the
 * default identity, source, GUI, and tool-guidance prose.
 */

import { createSnapshotStore, type SnapshotStore } from '@deepseek-ai/dsh-client-store'
import type { SettingsScope } from '@deepseek-ai/dsh-client-ui-settings/client'

/** Plugin-owned settings namespace. Hyphenated: settings ids cannot contain dots. */
export const SUPPRESS_SETTINGS_NS = 'dsh-system-prompt'

/** Fields this switch writes. */
export interface SuppressSettings {
  /** True when default prompt sections are dropped at assemble. */
  suppressBuiltin?: boolean
}

/** Page state the switch renders. */
export interface SuppressState {
  /** False while the namespace is not served to this client. */
  available: boolean
  /** Whether the Host document accepts writes. */
  writable: boolean
  /** Whether a write is crossing the wire. */
  saving: boolean
  /** Whether default prompt sections are currently suppressed. */
  on: boolean
}

/**
 * Binds the suppress switch to the plugin settings namespace.
 */
export class BuiltinSuppress {
  /** Snapshot the section renderer subscribes to. */
  readonly store: SnapshotStore<SuppressState>
  private saving = false

  /**
   * @param scope - the bound settings scope for {@link SUPPRESS_SETTINGS_NS}.
   */
  constructor(private readonly scope: SettingsScope<SuppressSettings>) {
    this.store = createSnapshotStore(this.project())
    scope.subscribe(() => { this.publish() })
  }

  /**
   * Persist the opposite of the current stored flag.
   * @returns settlement after the write.
   */
  async toggle(): Promise<void> {
    if (this.saving) return
    const next = !this.on()
    this.saving = true
    this.publish()
    await this.scope.set('suppressBuiltin', next)
    this.saving = false
    this.publish()
  }

  private on(): boolean {
    return this.scope.getSnapshot().value?.suppressBuiltin === true
  }

  private project(): SuppressState {
    const snapshot = this.scope.getSnapshot()
    return {
      available: snapshot.status === 'ready',
      writable: snapshot.writable,
      saving: this.saving,
      on: snapshot.value?.suppressBuiltin === true,
    }
  }

  private publish(): void {
    this.store.set(this.project())
  }
}
