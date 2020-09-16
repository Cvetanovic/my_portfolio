import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import aboutImg from "./about_me.png";

const About = () => {
  return (
    <div className="about container">
      <div className="about-content">
        <div className="about-text">
          <h2>About me</h2>
          <p>
            I'm an ambitious individual who is full with ideas about how to
            improve a wide range of Front End systems.
          </p>
          <p>
            Through my career I have been exposed to a broad range of projects,
            from which I have picked up new skills and continued to develop my
            competencies further.
          </p>
          <p>
            As a true professional I haven't trouble using the up-to-date
            technologies to develop functional and appealing websites and
            interactive web applications for clients needs.
          </p>
          <p>
            Always ready for new challenges, professional training and applying
            new knowledge.
          </p>
          <div className="link-content">
            <p>Feel free to take a look at my projects.</p>
            <button className="btn-link">
              <Link to="/projects">Learn more</Link>
            </button>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="aboutImg" />
        </div>
      </div>
    </div>
  );
};

export default About;
