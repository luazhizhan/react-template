import { useEffect, useState } from 'react'

function UseDarkMode(): [boolean, string, () => void] {
  const [theme, setTheme] = useState('dark')
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = (mode: string): void => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const themeToggler = (): void =>
    theme === 'light' ? setMode('dark') : setMode('light')

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme !== null) setTheme(localTheme)
    setMountedComponent(true)
  }, [])

  return [mountedComponent, theme, themeToggler]
}

export default UseDarkMode
