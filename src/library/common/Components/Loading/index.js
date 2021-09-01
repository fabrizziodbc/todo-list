import React from "react";
import "./Loading.css";

const Loading = (props) => (
  <div className="loading-cont">
    <div className="container">
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
    </div>
    <p>{props.children}</p>
  </div>
);

export { Loading };
