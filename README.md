# dsh-system-prompt

English | [中文](README.zh.md)

A DeepSeek Harness plugin with two jobs in one install:

1. **Settings → System prompt** — save `system-prompt.persona` and overlay the `deployment:persona` identity fragment of every session, including sessions composed from an agent preset.
2. **In-window rewind** — rewind the conversation to any earlier user message in the same window (no new branch), with optional workspace-file restore. Rewind source is [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) (MIT).

## Install

Requires [dsh web](https://github.com/deepseek-ai/deepseek-harness) 0.1.0-rc.6 or newer. Desktop: use profile `desktop`.

```sh
dsh plugin --profile web add github:novtia/dsh-system-prompt
```

This repository commits the built `lib/` and `client/client.js`. A GitHub install does not need a `prepare` build.

If pnpm ≥10 blocks a `prepare` script on an older checkout, allow it in that profile's `pnpm-workspace.yaml`:

```yaml
allowBuilds:
  dsh-system-prompt: true
```

Then restart `dsh web` (or Desktop). Open **Settings → System prompt**. In chat, each user message has a **↶ rewind** button; `/rewind` (alias `/undo`) opens the candidate list.

After this package is published to npm, prefer:

```sh
dsh plugin --profile web add dsh-system-prompt
```

Do **not** also install `dsh-rewind-plugin` — rewind is already in this package. Two copies of `/rewind` would conflict.

## System prompt

- Edits the identity fragment. Tool-guidance sections stay with each tool plugin unless **Hide default system prompt** is on.
- **Hide default system prompt** is an immediate switch: it drops the harness opener, checkout path, GUI notes, `@` path notes, and every tool how-to section. A saved identity overlay in the box still goes out; leave it empty to send no prompt sections.
- An empty saved identity hides that fragment only. **Reset** unsets the overlay so composition and each agent preset use their own text again.
- Changes apply on the next model step.
- Template variables include `{{model}}`, `{{cwd}}`, and `{{provider}}`; an unknown `{{name}}` fails that step.

A preset that marks its persona `complete: true` restores that section after the assemble waterfall, so hide-defaults cannot replace that complete prompt.

## Rewind

1. Pick a user message (or type `/rewind` / `/undo`).
2. Choose **conversation only** or **conversation and code** (the latter appears when there are restorable file backups after the target).
3. Withdrawn turns leave the model context and the rendered transcript. The target text is filled back into the composer so you can edit and re-send.

Rewind is append-only: it never deletes the session log. Workspace backups live under `<dsh home>/rewind-snapshots/` (`~/.dsh/rewind-snapshots/` when `$DSH_HOME` is unset). Auto-cleanup (off by default) is **Settings → Plugins → Plugin configuration → Snapshot cleanup**, or `/snapshot-auto-cleanup`.

Security model for the rewind half: [SiriLee/dsh-rewind SECURITY.md](https://github.com/SiriLee/dsh-rewind/blob/main/SECURITY.md).

## Listing in dsh-market

This repository is the plugin. The market catalog lives in [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin). Do not open a plugin-entry PR against [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market).

## License

MIT. Rewind portions: Copyright (c) 2026 SiriLee, from [dsh-rewind](https://github.com/SiriLee/dsh-rewind).
