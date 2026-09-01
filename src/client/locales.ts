/** Locale bundles for the system-prompt settings page. */

/** Locale keys this page renders. */
export type SystemPromptSettingsKey =
  | 'nav' | 'title' | 'intro' | 'label' | 'hint'
  | 'overridden' | 'reset' | 'readOnly'
  | 'save' | 'saving' | 'discard' | 'saveFailed' | 'unavailable'

/** English copy. */
export const en: Record<SystemPromptSettingsKey, string> = {
  nav: 'System prompt',
  title: 'System prompt',
  intro: 'This page replaces the identity fragment of every session, including sessions composed from an agent preset. Tool guidance stays with each tool plugin. Changes apply on the next model step. Available variables include {{model}}, {{cwd}}, and {{provider}}; an unknown {{name}} fails that step.',
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
}

/** Simplified Chinese copy. */
export const zh: Record<SystemPromptSettingsKey, string> = {
  nav: '系统提示词',
  title: '系统提示词',
  intro: '本页替换每个会话的身份片段，包括由 Agent 预设组成的会话。工具指导仍由各工具插件注册。修改在下一轮模型步骤生效。可用变量包括 {{model}}、{{cwd}} 和 {{provider}}；未知 {{name}} 会使该步失败。',
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
}
