import React from "react"

export default function Description(props){
  const { theme } = props;

  return (
    <div className={`description-box ${theme}-text ${theme}-el-bg element`}>
      <h3>Front end software engineer
      </h3>
      <p>Happiest when bringing beautiful, intuitive user experiences to life</p>
    </div>
  )
}