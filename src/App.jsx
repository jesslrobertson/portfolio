import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Description from './components/Description'

function App() {
  const storageKey = 'theme-preference'

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey)
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  }
  const [theme, setTheme] = useState(getColorPreference)

  return (
    <div className={`App ${theme}-background min-h-screen `}>
      <Header 
        theme={theme}
        setTheme={setTheme}
      />
      <Description 
        theme={theme}
      />
    </div>
  )
}

export default App
