import React from "react";
import "./NavbarToggle.css";
import { NavLink } from "react-router-dom";

const NavbarToggle = (props) => {
  let toggleClasses = "navbar-toggle";
  if (props.show) {
    toggleClasses = "navbar-toggle open";
  }
  return (
    <nav className={toggleClasses}>
      <div className="toggle-items">
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
  );
};

export default NavbarToggle;
