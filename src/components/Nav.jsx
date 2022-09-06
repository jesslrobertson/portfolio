import React from "react";
import Toggle from './Toggle'

export default function Nav(props) {
  const { theme, setTheme, introRef, aboutRef, projectsRef, contactRef } = props

  function handleScroll(elementRef){
    elementRef.scrollIntoView()
  }
  
  return (
    <div className={`nav-box darker-el-bg`}>
      <div className='nav-balance'/>
      <nav>
        <a className={`${theme}-nav-text accent-text nav-link`} onClick={() => handleScroll(introRef.current)}>
          Intro
        </a>
        <a className={`${theme}-nav-text accent-text nav-link`} onClick={() => handleScroll(aboutRef.current)}>
          About
        </a>
        <a className={`${theme}-nav-text accent-text nav-link`} onClick={() => handleScroll(projectsRef.current)}>
          Projects
        </a>
        <a className={`${theme}-nav-text accent-text nav-link`} onClick={() => handleScroll(contactRef.current)}>
          Contact
        </a>
        <Toggle 
        theme={theme}
        setTheme={setTheme}
      />
      </nav>
    </div>
    
  );
}
