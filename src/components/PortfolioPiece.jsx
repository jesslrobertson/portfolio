import React, {useEffect} from 'react'

export default function PortfolioPiece(props){
  const { theme, projectTitle, description, projectImg, githubLink, address } = props;

  function handleClick(address){
    console.log(address)
    window.open(`https://${address}`, "_blank")
  }

  return (
    <div className={`project-box ${theme}-el-bg`}>
      <div className={`project-items`}>
        <img className={`project-img ${theme}-box-shadow`} src={projectImg} />
        <div className={`project-description-box`}>
          <h3 className={`project-title ${theme}-text ${theme}-text-shadow`}>
              {projectTitle.toUpperCase()}
          </h3>
          <p className={`project-description ${theme}-text element-body`}>
            {description}
          </p>
          <a className={`${theme}-text link`}>{githubLink}</a>
        <button 
          className={`${theme}-button link-button ${theme}-contrast`}
          onClick={() => handleClick(address)}
          >
          Experience {projectTitle}
        </button>
        </div>
      </div>
    </div>
  )
}