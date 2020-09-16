import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ToggleButton from "../ToggleButton/ToggleButton";

const Navbar = (props) => (
  <header className="navbar">
    <nav className="navbar-content container">
      <div className="navbar-toggle-button">
        <ToggleButton click={props.toggleClickHandler} />
      </div>
      <div className="navbar-items">
        <NavLink
          exact
          activeClassName="navbar-link-active"
          className="navbar-link"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          activeClassName="navbar-link-active"
          className="navbar-link"
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          activeClassName="navbar-link-active"
          className="navbar-link"
          to="/skills"
        >
          Skills
        </NavLink>

        <NavLink
          activeClassName="navbar-link-active"
          className="navbar-link"
          to="/projects"
        >
          Projects
        </NavLink>

        <NavLink
          activeClassName="navbar-link-active"
          className="navbar-link"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Navbar;
