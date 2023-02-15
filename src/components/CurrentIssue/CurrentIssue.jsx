import React from "react";
import "./CurrentIssue.css"
import IssueList from '../IssueList/IssueList.jsx'

function CurrentIssue({issues}) {

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
      {/* type issue G160 mr willis thx */}
      <IssueList issues={issues} />
    </div>
  );
}

export default CurrentIssue;
