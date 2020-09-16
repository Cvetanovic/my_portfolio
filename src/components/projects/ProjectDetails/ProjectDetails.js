import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = ({ project }) => (
  <div className="project-details container">
    <div className="project-content">
      <div className="project-info">
        <div className="project-text">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project-tehnologies">
            <h3>Tehnologies</h3>
            <div className="tehnologies">
              <span>{project.tehnologies[0]}</span>
              <span>{project.tehnologies[1]}</span>
              <span>{project.tehnologies[2]}</span>
              <span>{project.tehnologies[3]}</span>
            </div>
          </div>
          <button className="btn-link">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View online
            </a>
          </button>
        </div>
        <div className="info-image">
          <img src={project.imgLarge} alt={project.title} />
        </div>
      </div>

      <div className="project-images">
        <div className="project-image">
          <img src={project.imgLarge} alt={project.title} />
        </div>
        <div className="project-image">
          <img src={project.imgMedium} alt={project.title} />
        </div>
        <div className="project-image">
          <img src={project.imgSmall} alt={project.title} />
        </div>
      </div>

      <div className="back-btn">
        <button className="btn-link">
          <Link to="/projects">Back</Link>
        </button>
      </div>
    </div>
  </div>
);
export default ProjectDetails;
