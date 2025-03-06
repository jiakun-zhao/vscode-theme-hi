import type { Theme } from './types'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import colors from './colors'

function defineTheme({ outPath, ...theme }: Theme) {
  theme.rules ??= []
  theme.tokenColors.forEach(({ scope, settings }) => {
    const tokens = Array.isArray(scope) ? scope : [scope]
    tokens.forEach((token) => {
      theme.rules!.push({ token, foreground: settings.foreground?.slice(1) })
    })
  })
  writeFileSync(outPath, JSON.stringify(theme, null, 2))
}

defineTheme({
  outPath: fileURLToPath(new URL('../themes/hi-custom.json', import.meta.url)),
  name: 'Hi Custom',
  base: 'vs-dark',
  colors,
  semanticHighlighting: true,
  semanticTokenColors: {
    // namespace: accent,
    // property: accent,
    // interface: accent,
    // type: accent,
    // class: accent,
  },
  tokenColors: [],
})
