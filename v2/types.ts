export type Colors = Record<string, string>

export interface Theme {
  outPath: string
  name: string
  base: 'vs' | 'vs-dark'
  colors: Colors
  semanticHighlighting: boolean
  semanticTokenColors: Partial<{
    namespace: string
    property: string
    interface: string
    type: string
    class: string
  }>
  tokenColors: {
    scope: string | string[]
    settings: Record<string, string>
  }[]
  rules?: {
    token: string
    foreground?: string
  }[]
}
