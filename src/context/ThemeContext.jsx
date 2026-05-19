import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [modeSombre, setModeSombre] = useState(() => {
    const sauvegarde = localStorage.getItem('theme')
    return sauvegarde ? sauvegarde === 'sombre' : true
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', modeSombre ? 'sombre' : 'clair')
    localStorage.setItem('theme', modeSombre ? 'sombre' : 'clair')
  }, [modeSombre])

  const basculerTheme = () => setModeSombre((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ modeSombre, basculerTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
