import React from 'react'

export default function About(props){
  const { theme, aboutRef } = props;
  return ( 
    <div className={`about-box section`} ref={aboutRef}>
      <h2 className={`${theme}-text subtitle`}>
        About Me
      </h2>
      <div className={`border ${theme}-accent`} />
      <div className={`info-box ${theme}-text element-title`}>
        <img src="public/assets/jessR.png" className="profile-pic" />
        <p className={`${theme}-text element-body sibling-text`}>My name is Jess, and I love building beautiful, intuitive things for the web. <br/>Before becoming a developer, I worked in a wide array of fields that helped me develop communication, design, leadership, and problem solving skills. Now, I'm passionate about building tech that is accessible, intuitive, and works well for everyone.</p>
      </div>
      <div className={`border ${theme}-accent`} />
      <h3 className={`${theme}-text`}>Technologies I'm working with:</h3>
      <ul className={`list-box ${theme}-accent-text `}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript ES6</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Tailwindcss</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
      <h3 className={`${theme}-text`}>Other Skills</h3>
      <ul className={`list-box ${theme}-accent-text `}>
        <li>Communication</li>
        <li>Project Management</li>
        <li>Typography</li>
        <li>Design</li>
        <li>Problem Solving</li>
        <li>Critical Thinking</li>
      </ul>

    </div>
  )
}