import React from 'react'

export default function Contact(props){
  const { theme, contactRef } = props

  return (
    <div className={`contact-box section`} ref={contactRef}>
      <h2 className={`${theme}-text subtitle`}>
        Contact
      </h2>
      <div className={`border ${theme}-accent`} />
      <p className={`${theme}-text element-body ${theme}-body`}>
        I'm currently looking for front end or full-stack development roles. I'm most excited about opportunites that will allow me to put my art and design background to good use by facilitating collaboration between the design and development teams. 
      </p>
      <a href="mailto: jesslaurenrobertson@gmail.com">
        <button className={`${theme}-accent link-button contact-button ${theme}-contrast ${theme}-box-shadow
            `}
            >
              Get in Touch
        </button>
      </a>
    </div>
  )

}