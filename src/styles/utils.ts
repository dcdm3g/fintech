import type { DefaultTheme } from 'styled-components'

export function text(theme: DefaultTheme, size: keyof DefaultTheme['texts']) {
  const [fontSize, lineHeight] = theme.texts[size]

  return `
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `
}
