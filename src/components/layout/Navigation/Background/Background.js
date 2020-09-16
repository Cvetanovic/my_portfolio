import React from "react";
import "./Background.css";

const Background = (props) => {
  return <div className="background" onClick={props.click}></div>;
};

export default Background;
