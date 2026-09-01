# dsh-system-prompt

[English](README.md) | 中文

DeepSeek Harness 组合包：在 **设置 → 系统提示词** 增加一页。保存后写入 `system-prompt.persona`，替换每个会话的 `deployment:persona` 身份片段，包括由 Agent 预设组成的会话。

## 安装

需要 [dsh web](https://github.com/deepseek-ai/deepseek-harness) 0.1.0-rc.6 或更新版本。

```sh
dsh plugin --profile web add github:novtia/dsh-system-prompt
```

若 pnpm ≥10 拦截 `prepare` 脚本，在该 profile 的 `pnpm-workspace.yaml` 里放行：

```yaml
allowBuilds:
  dsh-system-prompt: true
```

然后重启 `dsh web`，打开 **设置 → 系统提示词**。

发布到 npm 之后优先：

```sh
dsh plugin --profile web add dsh-system-prompt
```

## 它做什么

- 只改身份片段。工具指导仍由各工具插件注册。
- 留空并保存表示不发送身份片段。**恢复默认**会取消覆盖，组合配置与各 Agent 预设重新使用各自的原文。
- 修改在下一轮模型步骤生效。
- 可用变量包括 `{{model}}`、`{{cwd}}` 和 `{{provider}}`；未知 `{{name}}` 会使该步失败。

若某个预设把 persona 标成 `complete: true`，assemble 瀑布流之后会把该段还原为完整系统提示词，本覆盖无法替换那种完整提示词。

## 上架 dsh-market

本仓库是插件本身。目录在 [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)。不要往 [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) 提插件条目。

## 许可

MIT
