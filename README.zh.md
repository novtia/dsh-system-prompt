# dsh-system-prompt

[English](README.md) | 中文

一次安装同时提供两件事：

1. **设置 → 系统提示词** — 保存 `system-prompt.persona`，覆盖每个会话的 `deployment:persona` 身份片段，包括由 Agent 预设组成的会话。
2. **同窗口回退** — 把对话回退到任意更早的用户消息，不新建分支；可选一并还原工作区文件。回退实现来自 [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind)（MIT）。

## 安装

需要 [dsh web](https://github.com/deepseek-ai/deepseek-harness) 0.1.0-rc.6 或更新版本。Desktop 用 profile `desktop`。

```sh
dsh plugin --profile web add github:novtia/dsh-system-prompt
```

本仓库提交已构建的 `lib/` 与 `client/client.js`。从 GitHub 安装时不需要跑 `prepare` 构建。

若 pnpm ≥10 拦截旧检出上的 `prepare` 脚本，在该 profile 的 `pnpm-workspace.yaml` 里放行：

```yaml
allowBuilds:
  dsh-system-prompt: true
```

然后重启 `dsh web`（或 Desktop）。打开 **设置 → 系统提示词**。对话里每条用户消息有 **↶ 回退** 按钮；`/rewind`（别名 `/undo`）打开候选列表。

发布到 npm 之后优先：

```sh
dsh plugin --profile web add dsh-system-prompt
```

**不要**再装 `dsh-rewind-plugin` — 回退已经打进本包。两套 `/rewind` 会冲突。

## 系统提示词

- 默认只改身份片段。工具指导仍由各工具插件注册，除非打开 **屏蔽默认系统提示词**。
- **屏蔽默认系统提示词** 是即时开关：打开后身份开场、源码路径、GUI 说明、`@` 路径说明和各工具指导段都不再发给模型。文本框里已保存的身份覆盖仍会发送；留空则不发送任何提示词段。
- 留空并保存身份表示不发送身份片段。**恢复默认**会取消覆盖，组合配置与各 Agent 预设重新使用各自的原文。
- 修改在下一轮模型步骤生效。
- 可用变量包括 `{{model}}`、`{{cwd}}` 和 `{{provider}}`；未知 `{{name}}` 会使该步失败。

若某个预设把 persona 标成 `complete: true`，assemble 瀑布流之后会把该段还原为完整系统提示词，屏蔽默认无法替换那种完整提示词。

## 回退

1. 选中一条用户消息（或输入 `/rewind` / `/undo`）。
2. 选择 **仅回退对话** 或 **回退对话和代码**（后者仅在目标之后有可还原的文件备份时出现）。
3. 被撤回的回合会离开模型上下文和渲染对话。目标消息文本回填输入框，改完可重发。

回退是只追加：从不删改会话日志。工作区备份在 `<dsh home>/rewind-snapshots/`（未设 `$DSH_HOME` 时即 `~/.dsh/rewind-snapshots/`）。自动清理默认关闭，在 **设置 → 插件 → 插件配置 → 快照清理**，或用 `/snapshot-auto-cleanup`。

回退半边的安全模型见 [SiriLee/dsh-rewind SECURITY.md](https://github.com/SiriLee/dsh-rewind/blob/main/SECURITY.md)。

## 上架 dsh-market

本仓库是插件本身。目录在 [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)。不要往 [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) 提插件条目。

## 许可

MIT。回退部分：Copyright (c) 2026 SiriLee，来自 [dsh-rewind](https://github.com/SiriLee/dsh-rewind)。
