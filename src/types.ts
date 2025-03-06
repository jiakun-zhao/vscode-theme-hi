export type Theme = 'dark' | 'light'

export interface ThemeInfo {
  name: string
  base: string
}

export type VitesseColors = Record<string, [string, string]>