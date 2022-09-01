import React from "react"

export default function Description(props){
  const { theme } = props;

  return (
    <div className={`description-box ${theme}-text ${theme}-el-bg element`}>
      <h3 className="element-title">Front end software engineer
      </h3>
      <p className="element-body">I am a curious person driven by a love of learning and a passion for doing things well. I care deeply about developing software that is provides an intuitive ui/ux with clean, readable code.</p>
      <p className="element-body">
      I am energized by creative problem solving. My communication skills and background in art help me collaborate effectively with my team. 
      </p>
    </div>
  )
}