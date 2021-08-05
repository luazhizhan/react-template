import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useTranslation } from 'react-i18next'
import logo from '../logo.svg'

const Container = styled.header`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Rotate} infinite 20s linear;
  }
`

const Link = styled.a`
  color: #61dafb;
`

function Content(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <p>
        {t('Edit')} <code>{t('src/App.tsx')}</code> {t('and save to reload')}
      </p>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('Learn React')}
      </Link>
    </Container>
  )
}

export default Content
