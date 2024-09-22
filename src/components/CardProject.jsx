import React from "react";
import { myProjects } from "../data/project";

const CardProject = () => {
  return (
    <section className="project-section">
      <h1 className="project-h1">Web projects</h1>

      <div className="site">
        {myProjects.map((project, index) => (
          <div className="site1 hiddenX">
            <a href={project.url} target="_blank">
              <h4>{project.title}</h4>
              <img
                className="size-project"
                src={project.img}
                alt={project.title}
              />
              <p>{project.description}</p>
              <p>Langages : {project.tech}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardProject;
