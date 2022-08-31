import React from 'react'
import Toggle from './Toggle'

export default function Header(props){

  const { theme, setTheme } = props
  return (
    <header >
      <h1
        className={`title ${theme}-text`}
      >Jess Robertson</h1>
      <Toggle 
        theme={theme}
        setTheme={setTheme}
      />
      <div className={`header-border ${theme}-accent`} />
    </header>
  )
}