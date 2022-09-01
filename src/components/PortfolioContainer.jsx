import React from 'react'
import PortfolioPiece from './PortfolioPiece'
import PortfolioContent from '../assets/PortfolioContent'

export default function PortfolioContainer(props){
  const { theme } = props

  return (
    <div className={`portfolio-box ${theme}-collection`} >
      <div className={`top-border ${theme}-accent`} />
      <h2 className={`${theme}-text subtitle`}>
        Projects
      </h2>
      <div className={`${theme}-collection slide-display ${theme}er-el-bg element`}>
        {PortfolioContent.map((project) => {
          const {projectTitle, description, projectImg, githubLink, address } = project
          return (
            <PortfolioPiece 
              theme={theme}
              projectTitle={projectTitle}
              description={description}
              projectImg={projectImg}
              githubLink={githubLink}
              address={address}
              key={PortfolioContent.indexOf(project)}
            />
          )
        })}
      </div>
      <div className={`bottom-border ${theme}-accent`} />
    </div>
  )
}