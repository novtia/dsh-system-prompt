# dsh-system-prompt

English | [中文](README.zh.md)

A DeepSeek Harness bundle that adds a **Settings → System prompt** page. Saving writes `system-prompt.persona` and replaces the `deployment:persona` identity fragment of every session, including sessions composed from an agent preset.

## Install

Requires [dsh web](https://github.com/deepseek-ai/deepseek-harness) 0.1.0-rc.6 or newer.

```sh
dsh plugin --profile web add github:novtia/dsh-system-prompt
```

If pnpm ≥10 blocks the `prepare` script, allow it in that profile's `pnpm-workspace.yaml`:

```yaml
allowBuilds:
  dsh-system-prompt: true
```

Then restart `dsh web` and open **Settings → System prompt**.

After this package is published to npm, prefer:

```sh
dsh plugin --profile web add dsh-system-prompt
```

## What it does

- Edits only the identity fragment. Tool-guidance sections stay with each tool plugin.
- An empty saved value hides the identity fragment. **Reset** unsets the overlay so composition and each agent preset use their own text again.
- Changes apply on the next model step.
- Template variables include `{{model}}`, `{{cwd}}`, and `{{provider}}`; an unknown `{{name}}` fails that step.

A preset that marks its persona `complete: true` restores that section after the assemble waterfall, so this overlay cannot replace that complete prompt.

## Listing in dsh-market

This repository is the plugin. The market catalog lives in [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin). Do not open a plugin-entry PR against [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market).

## License

MIT
