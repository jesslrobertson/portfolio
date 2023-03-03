import React, {useState} from 'react'
import ContactModal from './ContactModal'

export default function Contact(props){
  const { theme, contactRef } = props
  const [modalView, setModalView] = useState(false)


  return (
    <div className={`contact-box section`} ref={contactRef}>
      <h2 className={`${theme}-text subtitle`}>
        Contact
      </h2>
      <div className={`border ${theme}-accent`} />
      <p className={`${theme}-text element-body ${theme}-body`}>
        I'm currently looking for front end or full-stack development roles. I'm most excited about opportunites that will allow me to put my art and design background to good use by facilitating collaboration between the design and development teams. 
      </p>
        <button onClick={() => setModalView(true)}className={`${theme}-accent link-button contact-button ${theme}-contrast ${theme}-box-shadow
            `}
            >
              Get in Touch
        </button>
        {modalView && <ContactModal setModalView={setModalView} theme={theme} />}
    </div>
  )

}