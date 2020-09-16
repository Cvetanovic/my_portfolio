import React from "react";
import "./PageNotFound.css";
import errorImg from "./404_page.jpg";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="error container">
      <div className="error-content">
        <h2>Sorry</h2>
        <span>We couldn't find this page.</span>
        <img src={errorImg} alt="error-img" />
        <div className="link-content">
          <button className="btn-link">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
