import React from "react";
import "../App.css";

const Project = () => {
  return (
    <div className="card-container">
      <div className="topCard">Card 1</div>
      <div className="middleCard">
        <div className="card card-1">Card 2</div>
        <div className="divider"></div>
        <div className="card card-2">Card 3</div>
      </div>
      <div className="bottomCard">Card 4</div>
    </div>
  );
};

export default Project;
