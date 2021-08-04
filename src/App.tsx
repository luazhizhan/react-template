import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import UseDarkMode from './components/UseDarkMode'
import GlobalStyles from './themes/Globalstyles'
import { lightTheme, darkTheme } from './themes/Themes'
import logo from './logo.svg'
import Toggle from './components/Toggler'

const AppDiv = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

const AppRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppRotate} infinite 20s linear;
  }
`

const AppLink = styled.a`
  color: #61dafb;
`

function App(): JSX.Element {
  const [mountedComponent, theme, themeToggler] = UseDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (mountedComponent === false) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppDiv>
        <Toggle toggleTheme={themeToggler} />
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </AppDiv>
    </ThemeProvider>
  )
}
export default App
