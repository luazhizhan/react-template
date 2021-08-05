import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Button = styled.button<{ selected: boolean }>`
  background: ${({ theme, selected }): string =>
    selected ? '#61dafb' : theme.background};
  border: 1.5px solid ${({ theme }): string => theme.toggleBorder};
  color: ${({ theme }): string => theme.text};
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.4rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
`

const TranslateText = styled.span`
  margin-top: 10px;
  margin-left: 1em;
  font-weight: bold;
`

function Navigation(props: { children: ReactNode }): JSX.Element {
  const { children } = props
  const { i18n } = useTranslation()

  const toggleLangauge = (langauge: 'en' | 'zh' | 'ms'): void => {
    i18n.changeLanguage(langauge)
  }
  return (
    <Nav>
      {children} {/* Theme Toggler */}
      <TranslateText>Translation: </TranslateText>
      <Button
        selected={i18n.language === 'en'}
        onClick={(): void => toggleLangauge('en')}
        type="button"
      >
        English
      </Button>
      <Button
        selected={i18n.language === 'zh'}
        onClick={(): void => toggleLangauge('zh')}
        type="button"
      >
        Chinese
      </Button>
      <Button
        selected={i18n.language === 'ms'}
        onClick={(): void => toggleLangauge('ms')}
        type="button"
      >
        Malay
      </Button>
    </Nav>
  )
}

export default Navigation
