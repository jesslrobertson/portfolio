import React from "react";
import PortfolioPiece from "./PortfolioPiece";


export default function PortfolioContainer(props) {
  const { theme, projectsRef } = props;

  const PortfolioContent = [
    {projectTitle: "VetFest",
    description:
      "VetFest is an app built for non-profit organization OP-Veteran to manage booth reservation for their annual festival. It is currently undergoing developement. I have been responsible for debugging and some UX changes.",
    projectImg: "https://media.githubusercontent.com/media/jesslrobertson/portfolio/main/src/assets/op-veteran.png",
    githubLink: "https://github.com/V-School-Module-7/op-veteran",
    address: "https://op-veterans-dev.firebaseapp.com",
    },
    {
      projectTitle: "Plantae",
      description:
        "Plantae is a full-stack social app with authentication. It's designed for people who love caring for plants.",
      projectImg: "https://media.githubusercontent.com/media/jesslrobertson/portfolio/main/src/assets/plantae.png",
      githubLink: "https://github.com/jesslrobertson/plantae",
      address: "plantae.cyclic.app",
    },
    {
      projectTitle: "Doodle-ooo",
      description:
        "Doodle-ooo is a minimalistic React paint app. With Doodle-ooo, you can draw using HTML Canvas and save your drawing to the gallery. More features coming soon!",
      projectImg: "https://media.githubusercontent.com/media/jesslrobertson/portfolio/main/src/assets/doodle-ooo.png",
      githubLink: "https://github.com/jesslrobertson/doodle-ooo",
      address: "doodle-ooo.netlify.app/",
    },
    {
      projectTitle: "Voyage",
      description:
        "Voyage is built to interact with NASA's public image APIs. With Voyage, you can view the Astronomy Picture of the Day, search the image database, view random images, and view images from the James Webb Space Telescope.",
      projectImg: "https://media.githubusercontent.com/media/jesslrobertson/portfolio/main/src/assets/voyage.png",
      githubLink: "https://github.com/jesslrobertson/voyage",
      address: "ode-to-voyager.netlify.app/",
    },
  ];

  return (
    <div
      className={`portfolio-box ${theme}-collection section`}
      ref={projectsRef}
    >
      <h2 className={`${theme}-text subtitle`}>Projects</h2>
      <div className={`border ${theme}-accent`} />
      <div className={`${theme}-collection collection element`}>
        {PortfolioContent.map((project) => {
          const { projectTitle, description, projectImg, githubLink, address } =
            project;
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
          );
        })}
      </div>
      <div className={`bottom-border ${theme}-accent`} />
    </div>
  );
}
