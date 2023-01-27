import React from "react";

export default function About(props) {
  const { theme, aboutRef } = props;
  const technologies = ["React.js", "JavaScript ES6", "HTML5", "CSS", "Tailwind","Node.js", "Express", "Axios", "MongoDB", "Mongoose", "Adobe Photoshop", "Adobe Illustrator", "AdobeXD", "Figma", "API Integration"]
  const skills = ["Critical Thinking", "Communication", "Problem Solving", "Design", "Typography", "Creativity", ]
  return (
    <div className={`about-box section`} ref={aboutRef}>
      <h2 className={`${theme}-text subtitle`}>About Me</h2>
      <div className={`border ${theme}-accent`} />
      <div className={`info-box ${theme}-text element-title`}>
        <img src="https://media.githubusercontent.com/media/jesslrobertson/portfolio/main/src/assets/jessR.png" className="profile-pic" />
        <p className={`${theme}-text element-body sibling-text ${theme}-body`}>
          My name is Jess, and I love building beautiful, intuitive things for
          the web. <br />
          Before becoming a software engineer, I worked in a wide array of fields that
          helped me develop communication, design, leadership, and problem
          solving skills. Now, I'm passionate about building tech that is delightful to use and works well for all the people using the web
          today.
        </p>
      </div>
      <div className={`border ${theme}-accent`} />
      <h3 className={`${theme}-text`}>Technologies I'm working with:</h3>
      <ul className={`list-box ${theme}-accent-text `}>
        {technologies.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
        
      </ul>
      <h3 className={`${theme}-text`}>Other Skills</h3>
      <ul className={`list-box ${theme}-accent-text `}>
        {skills.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}
