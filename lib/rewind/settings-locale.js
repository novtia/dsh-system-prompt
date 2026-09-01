/**
 * Version-neutral settings-namespace reading for the host half.
 *
 * DSH rc.2 exposes a `settingsNamespace(value)` brand helper, and `settings.get`
 * is typed to require a branded `SettingsNamespace`. DSH 0.1.2-alpha.2 removed
 * that helper (the `SettingsNamespace` *type* remains) and `settings.get`
 * accepts the raw namespace string. This module collapses both into one runtime
 * call: on rc.2 the brand is a compile-time marker erased at runtime (so
 * `settingsNamespace(ns)` returns `ns`), on 0.1.2-alpha.2 the brand helper is
 * absent and the raw `ns` string is used directly. That is what lets a single
 * compiled host bundle link and run on both harness generations.
 *
 * @module dsh-rewind/settings-locale
 */
/**
 * Read one settings section keyed by `ns`, tolerant of the settings-namespace
 * brand across DSH generations. Pass the brand helper when available (the rc.2
 * path); it is `undefined` on 0.1.2-alpha.2, where the raw `ns` string is used
 * directly. Never throws: an absent section simply returns `undefined`.
 */
export function readSettingsSection(provider, ns, brand) {
    const key = brand?.(ns) ?? ns;
    return provider.get(key);
}
