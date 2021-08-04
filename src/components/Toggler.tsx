import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }): string => theme.background};
  border: 2px solid ${({ theme }): string => theme.toggleBorder};
  color: ${({ theme }): string => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }`

function Toggle({ toggleTheme }: { toggleTheme: () => void }): JSX.Element {
  return <Button onClick={toggleTheme}>Switch Theme</Button>
}

export default Toggle
