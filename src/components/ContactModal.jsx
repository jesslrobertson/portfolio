import React, { useState } from "react";

export default function ContactModal({ setModalView, theme }) {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    setModalView(false);
  };
  return (
    <div className={`contact-modal ${theme}er-el-bg ` }>
      <form onSubmit={handleSubmit} className="modal-form">
      <h4 className={`accent-text ${theme}-accent-text`}>Get in touch</h4>
        <div>
          <label htmlFor="name" className={`${theme}-text`}>
            Name:
          </label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email" className={`${theme}-text`}>
            Email:
          </label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message" className={`${theme}-text`}>
            Message:
          </label>
          <textarea id="message" required />
        </div>
        <div className="button-box">
          <button
            type="submit"
            className={`${theme}-accent link-button contact-button ${theme}-contrast ${theme}-box-shadow
            `}
          >
            {status}
          </button>
          <button
            onClick={() => setModalView(false)}
            className={`${theme}-accent link-button contact-button ${theme}-contrast ${theme}-box-shadow
            `}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
