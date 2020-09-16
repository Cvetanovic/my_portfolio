import React from "react";
import "./ProjectList.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <div className="projects container">
      <h2>My projects</h2>
      <div className="projects-list">
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};
export default ProjectList;
