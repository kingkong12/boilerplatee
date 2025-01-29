import 'styled-components'
import theme from './theme'

type THEME = typeof theme

declare module 'styled-components' {
  export type DefaultTheme = THEME
}
