/**
 * Overlay the `deployment:persona` section from the user-layer
 * `system-prompt.persona` setting on every assemble, including agent-preset
 * scopes. A stored `dsh-system-prompt.suppressBuiltin` drops every other
 * prompt section. Registers the settings namespaces when the composed harness
 * has not.
 */
import type { Context } from '@deepseek-ai/cordis';
/** Cordis plugin name. */
export declare const name = "dsh-system-prompt";
/** Prompt registry must exist before the waterfall can wrap assemble. */
export declare const inject: string[];
/**
 * Install the settings namespace when missing, then overlay persona on assemble.
 * @param ctx - the plugin context after `systemPrompt` is available.
 */
export declare function apply(ctx: Context): void;
