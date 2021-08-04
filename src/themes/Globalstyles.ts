import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }): string => theme.body};
    color: ${({ theme }): string => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  `
export default GlobalStyles
