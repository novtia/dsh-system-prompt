window.__ModuleLoader__.load({
	id: "dsh-system-prompt",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		let _deepseek_ai_dsh_client_store = require("@deepseek-ai/dsh-client-store");
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
			"badge": "wW440W_badge",
			"section": "wW440W_section",
			"failed": "wW440W_failed",
			"head": "wW440W_head",
			"badges": "wW440W_badges",
			"intro": "wW440W_intro",
			"status": "wW440W_status",
			"label": "wW440W_label",
			"reset": "wW440W_reset",
			"textarea": "wW440W_textarea",
			"hint": "wW440W_hint",
			"title": "wW440W_title",
			"footer": "wW440W_footer"
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
		const en = {
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
		const zh = {
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
				zh,
				en
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
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map