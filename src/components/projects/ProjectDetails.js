import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Plan Title - {id} </span>
          <p>
            lorem ipsum isd the gretign person iun the worlk di cant oitine
            erihsdjh theh right
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Brodrick George</div>
          <div>29th of January, 11am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
