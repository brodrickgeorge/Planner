import React from "react";
import ProjectList from "./ProjectList";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Brodrick George.</p>
        <p className="grey-text">29th January, 10am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
