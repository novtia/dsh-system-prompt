/**
 * Overlay the `deployment:persona` section from the user-layer
 * `system-prompt.persona` setting on every assemble, including agent-preset
 * scopes. A stored `dsh-system-prompt.suppressBuiltin` drops every other
 * prompt section. Registers the settings namespaces when the composed harness
 * has not.
 */
import z from '@deepseek-ai/schemastery';
import * as rewind from "./rewind/index.js";
/** Cordis plugin name. */
export const name = 'dsh-system-prompt';
/** Prompt registry must exist before the waterfall can wrap assemble. */
export const inject = ['systemPrompt'];
const PERSONA_SECTION = 'deployment:persona';
const SETTINGS_NS = 'system-prompt';
const SUPPRESS_NS = 'dsh-system-prompt';
const SettingsSchema = z.object({
    persona: z.string(),
});
const SuppressSchema = z.object({
    suppressBuiltin: z.boolean().default(false),
});
/**
 * Stored user-layer persona when `system-prompt.persona` is present.
 * @param ctx - the plugin context.
 * @returns the overlay, `''` to hide identity, or `undefined` to leave composition and each preset.
 */
function userPersonaOverlay(ctx) {
    const settings = ctx.get('settings');
    if (settings === undefined)
        return undefined;
    const descriptor = settings.describe().find(row => String(row.ns) === SETTINGS_NS);
    const user = descriptor?.user;
    if (user === undefined || typeof user !== 'object' || user === null)
        return undefined;
    if (!Object.hasOwn(user, 'persona'))
        return undefined;
    const persona = user.persona;
    return typeof persona === 'string' ? persona : undefined;
}
/**
 * Stored hide-defaults flag when `dsh-system-prompt.suppressBuiltin` is true.
 * @param ctx - the plugin context.
 * @returns true when default prompt sections should be dropped.
 */
function builtinSuppressed(ctx) {
    const settings = ctx.get('settings');
    if (settings === undefined)
        return false;
    const descriptor = settings.describe().find(row => String(row.ns) === SUPPRESS_NS);
    const user = descriptor?.user;
    if (user === undefined || typeof user !== 'object' || user === null)
        return false;
    return user.suppressBuiltin === true;
}
/**
 * Keep only a non-empty user overlay. Empty or unset overlay yields no sections.
 * @param overlay - stored persona text, including `''`.
 * @returns the suppressed section list.
 */
function suppressedSections(overlay) {
    if (overlay === undefined || overlay === '')
        return [];
    return [{ name: PERSONA_SECTION, text: overlay }];
}
/**
 * Replace or drop the identity section for a stored overlay.
 * @param sections - assembled sections in registry order.
 * @param overlay - stored persona text, including `''`.
 * @returns a new sections array.
 */
function applyOverlay(sections, overlay) {
    const index = sections.findIndex(section => section.name === PERSONA_SECTION);
    if (overlay === '') {
        if (index < 0)
            return [...sections];
        return [...sections.slice(0, index), ...sections.slice(index + 1)];
    }
    if (index >= 0) {
        const next = [...sections];
        next[index] = { ...next[index], text: overlay };
        return next;
    }
    const identity = sections.findIndex(section => section.name === 'harness:identity');
    const insertAt = identity >= 0 ? identity + 1 : 0;
    return [
        ...sections.slice(0, insertAt),
        { name: PERSONA_SECTION, text: overlay },
        ...sections.slice(insertAt),
    ];
}
/**
 * Expose `system-prompt` through the settings provider. Desktop's pinned
 * harness has `register` only; newer hosts also have `installSection`.
 * @param ctx - the plugin context that owns the registration fiber.
 * @param settings - the live settings provider.
 */
function registerNamespace(ctx, settings, ns, schema, entry) {
    try {
        if (typeof settings.installSection === 'function') {
            settings.installSection(ctx, ns, schema, entry, {
                setSource: () => { },
                onChange: () => { },
            });
            return;
        }
        settings.register(ns, schema, { base: entry });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        if (!message.includes('already registered'))
            throw error;
    }
}
/**
 * Install the settings namespace when missing, then overlay persona on assemble.
 * @param ctx - the plugin context after `systemPrompt` is available.
 */
export function apply(ctx) {
    ctx.inject(['settings'], (settingsCtx) => {
        const settings = settingsCtx.settings;
        registerNamespace(settingsCtx, settings, SETTINGS_NS, SettingsSchema, { persona: '' });
        registerNamespace(settingsCtx, settings, SUPPRESS_NS, SuppressSchema, { suppressBuiltin: false });
    });
    ctx.on('system-prompt/assemble', (async (assembly, _context, next) => {
        const result = await next();
        const overlay = userPersonaOverlay(ctx);
        if (builtinSuppressed(ctx)) {
            return { ...result, sections: suppressedSections(overlay) };
        }
        if (overlay === undefined)
            return result;
        return { ...result, sections: applyOverlay(result.sections, overlay) };
    }));
    // Nested plugin: waits on `commands`/`tools` itself so a host without them
    // still gets the persona overlay. Rewind source is SiriLee/dsh-rewind (MIT).
    ctx.plugin(rewind);
}
