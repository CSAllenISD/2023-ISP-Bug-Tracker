import React from "react";
import "./CurrentIssue.css"

function CurrentIssue() {
  return (
    <div className="grey-card-container">
    <div className="current-issues">
      <div className="indv-issue">
      <p className="close-issue">Close Issue</p>
      <p>Assigned<span>Username</span></p>
      <p>Priority<span>High</span></p>
      <p>Description</p>
      <p className="description-text">Short Description of the Project describing the issue</p>
      <hr />
      </div>
      <div className="indv-issue">
      <p className="close-issue">Close Issue</p>
      <p>Assigned<span>Username</span></p>
      <p>Priority<span>High</span></p>
      <p>Description</p>
      <p className="description-text">Short Description of the Project describing the issue</p>
      <hr />
      </div>
      <div className="indv-issue">
      <p className="close-issue">Close Issue</p>
      <p>Assigned<span>Username</span></p>
      <p>Priority<span>High</span></p>
      <p>Description</p>
      <p className="description-text">Short Description of the Project describing the issue</p>
      <hr />
      </div>
    </div>
    </div>
  );
}

export default CurrentIssue;
