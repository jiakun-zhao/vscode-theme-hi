import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import type { Theme } from './types'
import { colors } from './colors'

// primer
export function getColors(style: Theme) {
  if (style === 'dark') {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors: any = {}
    Object.entries(colors).forEach(([name, val]) => {
      if (name === 'black')
        darkColors.white = val

      else if (name === 'white')
        darkColors.black = val

      else
        darkColors[name] = [...toArray(val)].reverse()
    })
    return darkColors
  } else {
    return colors
  }
}

export function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr))
    return arr
  return [arr]
}

export async function write(theme: Theme, data: any) {
  await writeFile(
    fileURLToPath(new URL(`../themes/hi-${theme}.json`, import.meta.url)),
    JSON.stringify(data, null, 2),
  )
}
