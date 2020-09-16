import React from "react";
import "./Skills.css";
import Cube from "../../animations/Cube/Cube";

const Skills = () => {
  return (
    <div className="skills container">
      <div className="skills-content">
        <h2>My skills</h2>
        <div className="skills-text">
          <span>My current experience and skills in front - end includes:</span>
          <ul>
            <li>
              Building responsive websites and web apps that provide users the
              best and most appropriate experience suited to their device and
              browser
            </li>
            <li>
              I write standards based code that is performant, accessible, easy
              to maintain
            </li>
            <li>Coding interactive layouts</li>
            <li>Optimize code for maximum speed, usability and scalability</li>
            <li>Focused on crafting clean & user‑friendly experiences</li>
          </ul>

          <div className="link-content">
            <p>Visit my profiles on GitHub and Linkedin for more details.</p>

            <button className="btn-link">
              <a
                href="https://www.linkedin.com/in/svetlana-cvetanovic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="devicon-linkedin-plain"></i>
              </a>
            </button>
            <button className="btn-link">
              <a
                href="https://github.com/Cvetanovic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="devicon-github-plain"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="skills-animation">
          <Cube />
        </div>
      </div>
    </div>
  );
};

export default Skills;
