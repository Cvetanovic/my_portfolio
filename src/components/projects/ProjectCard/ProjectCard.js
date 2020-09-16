// src/Users/UsersCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card">
        <div className="card-front">
          <img src={project.imgLarge} alt={project.title} />
        </div>
        <div className="card-back">
          <h4>{project.title}</h4>
          <p>{project.info}</p>
          <button className="btn-link">
            <Link to={"/project/" + project.id}>Learn more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
