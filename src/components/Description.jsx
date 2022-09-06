import React from "react";

export default function Description(props) {
  const { theme } = props;

  return (
    <div className={`description-box element`}>
      <h4 className={`${theme}-accent-text accent-text`}>
        Hi, I'm
      </h4>
      <h1
        className={`title ${theme}-text`}
      >Jess Robertson</h1>
      <div className={`border ${theme}-accent`} />
      <h3 className={`element-title ${theme}-text`}>
        Full stack software developer
      </h3>
      <p className={`element-body ${theme}-text`}>
        I'm a software developer with a diverse background. I love problem
        solving and building exceptional user experiences.
      </p>
      <div className={`border ${theme}-accent border-bottom`} />
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
    </div>
  );
}
