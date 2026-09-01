/** Locale bundles for the system-prompt settings page. */

/** Locale keys this page renders. */
export type SystemPromptSettingsKey =
  | 'nav' | 'title' | 'intro' | 'label' | 'hint'
  | 'overridden' | 'reset' | 'readOnly'
  | 'save' | 'saving' | 'discard' | 'saveFailed' | 'unavailable'
  | 'suppress' | 'suppressHint' | 'suppressOn' | 'suppressOff'

/** English copy. */
export const en: Record<SystemPromptSettingsKey, string> = {
  nav: 'System prompt',
  title: 'System prompt',
  intro: 'This page replaces the identity fragment of every session, including sessions composed from an agent preset. Turn on Hide defaults to drop the harness opener, source path, GUI notes, and every tool-guidance section. Changes apply on the next model step. Available variables include {{model}}, {{cwd}}, and {{provider}}; an unknown {{name}} fails that step.',
  label: 'Identity',
  hint: 'Leave empty and save to send no identity fragment. Reset unsets this overlay so composition and each agent preset use their own identity text.',
  overridden: 'Overridden',
  reset: 'Reset to default',
  readOnly: 'This deployment stores settings read-only.',
  save: 'Save',
  saving: 'Saving…',
  discard: 'Discard',
  saveFailed: 'The deployment did not accept these values; they were left for you to correct.',
  unavailable: 'This deployment does not expose a system-prompt setting.',
  suppress: 'Hide default system prompt',
  suppressHint: 'When on, identity, checkout path, GUI notes, @-path notes, and every tool how-to section are not sent. Text in the box below still is, if you saved an overlay.',
  suppressOn: 'Defaults hidden',
  suppressOff: 'Defaults sent',
}

/** Simplified Chinese copy. */
export const zh: Record<SystemPromptSettingsKey, string> = {
  nav: '系统提示词',
  title: '系统提示词',
  intro: '本页替换每个会话的身份片段，包括由 Agent 预设组成的会话。打开「屏蔽默认系统提示词」后，身份开场、源码路径、GUI 说明和各工具指导段都不再发给模型。修改在下一轮模型步骤生效。可用变量包括 {{model}}、{{cwd}} 和 {{provider}}；未知 {{name}} 会使该步失败。',
  label: '身份',
  hint: '留空并保存表示不发送身份片段。恢复默认会取消本覆盖，组合配置与各 Agent 预设会重新使用各自的身份原文。',
  overridden: '已覆盖',
  reset: '恢复默认',
  readOnly: '本部署的设置为只读。',
  save: '保存',
  saving: '保存中…',
  discard: '放弃修改',
  saveFailed: '本部署没有接受这些值，已保留供你修改。',
  unavailable: '本部署没有开放系统提示词设置。',
  suppress: '屏蔽默认系统提示词',
  suppressHint: '打开后，身份开场、源码路径、GUI 说明、@ 路径说明和各工具指导段都不再发给模型。下方文本框里已保存的身份覆盖仍会发送。',
  suppressOn: '已屏蔽默认',
  suppressOff: '正在发送默认',
}
