import React from "react";
import { myProjects } from "../data/project";

const CardProject = () => {
  return (
    <section className="project-section">
      <h1 className="project-h1">Web projects</h1>

      <div className="project-wrapper">
        {myProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.url} target="_blank">
              <h4>{project.title}</h4>
              <img
                className="project-img"
                src={project.img}
                alt={project.title}
              />
              <p>{project.description}</p>
              <p>Stack : {project.tech}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardProject;
