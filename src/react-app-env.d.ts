/// <reference types="react-scripts" />
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    background: string

    toggleBorder: string
  }
}
