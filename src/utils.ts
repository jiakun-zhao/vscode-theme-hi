import type { Theme } from './types'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { objectMap } from '@jiakun-zhao/utils'
import { colors } from './colors'

// primer
export function getColors(style: Theme): typeof colors {
  if (style === 'light')
    return colors
  const { white, black, ...rest } = colors
  return { white: black, black: white, ...objectMap(rest, (name, values) => [name, values.toReversed()]) }
}

export function write(theme: Theme, data: any) {
  writeFileSync(
    fileURLToPath(new URL(`../themes/hi-${theme}.json`, import.meta.url)),
    JSON.stringify(data, null, 2),
  )
}
