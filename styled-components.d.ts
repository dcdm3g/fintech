import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      foreground: string
      card: string
      'card-foreground': string
      popover: string
      'popover-foreground': string
      primary: string
      'primary-foreground': string
      secondary: string
      'secondary-foreground': string
      muted: string
      'muted-foreground': string
      accent: string
      'accent-foreground': string
      destructive: string
      'destructive-foreground': string
      border: string
      input: string
      ring: string
      radius: string
      'chart-1': string
      'chart-2': string
      'chart-3': string
      'chart-4': string
      'chart-5': string
    }
    texts: {
      xs: [string, string]
      sm: [string, string]
      base: [string, string]
      lg: [string, string]
      xl: [string, string]
      '2xl': [string, string]
      '3xl': [string, string]
      '4xl': [string, string]
    }
  }
}
