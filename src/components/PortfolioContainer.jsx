import React from 'react'
import PortfolioPiece from './PortfolioPiece'
import { PortfolioContent } from '../../public/assets/PortfolioContent'

export default function PortfolioContainer(props){
  const { theme, projectsRef } = props

  return (
    <div className={`portfolio-box ${theme}-collection section`} ref={projectsRef}>
      <h2 className={`${theme}-text subtitle`}>
        Projects
      </h2>
      <div className={`border ${theme}-accent`} />
      <div className={`${theme}-collection collection element`}>
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