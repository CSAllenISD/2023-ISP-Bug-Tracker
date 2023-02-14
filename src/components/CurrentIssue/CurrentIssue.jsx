import React, { useState } from "react";
import "./CurrentIssue.css"
import IssueList from '../IssueList/IssueList.jsx'

function CurrentIssue() {

  const [issues] = useState([]);

  return (
    <div className="current-issues">
      <div className="indv-issue">
        <p className="close-issue">Close Issue</p>
        <p>Assigned<span>Username</span></p>
        <p>Priority<span>High</span></p>
        <p>Description</p>
        <p className="description-text">Short Description of the Project describing the issue</p>
        <hr/>




      </div>
      <IssueList issues={issues} />
    </div>
  );
}

export default CurrentIssue;
