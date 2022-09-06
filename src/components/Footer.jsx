import React from 'react'

export default function Footer(props){
  const { theme } = props

  return (
    <footer>
      <p className={`${theme}-text credit`}>
        Designed and Built by Jess Robertson
      </p>
      <div className={`link-box`}>
        <a
          className={`${theme}-icon fa-brands fa-github icon`}
          href="https://github.com/jesslrobertson"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          className={`fa-brands fa-linkedin-in ${theme}-icon icon`}
          href="https://www.linkedin.com/in/jessrobertsoncodes"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="mailto: jesslaurenrobertson@gmail.com"
          className={`${theme}-accent-text`}
        >
          jesslaurenrobertson@gmail.com
        </a>
      </div>
    </footer>
  )
}