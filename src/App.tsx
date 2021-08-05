import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import UseDarkMode from './components/UseDarkMode'
import GlobalStyles from './themes/Globalstyles'
import { lightTheme, darkTheme } from './themes/Themes'
import Content from './components/Content'
import Navigation from './components/Navigation'
import Toggle from './components/Toggler'

const Container = styled.div`
  text-align: center;
`

function App(): JSX.Element {
  const [mountedComponent, theme, themeToggler] = UseDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (mountedComponent === false) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Container>
        <Navigation>
          <Toggle toggleTheme={themeToggler} />
        </Navigation>
        <Content />
      </Container>
    </ThemeProvider>
  )
}

export default App
