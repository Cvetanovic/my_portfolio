import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Circles from "../../animations/Circles/Circles";

const Home = () => {
  return (
    <div className="home container">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, my name is Svetlana.</h1>
          <span>I'm a Front End Developer.</span>
        </div>
        <div className="link-content">
          <button className="btn-link">
            <Link to="/about">Learn more</Link>
          </button>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Home;
