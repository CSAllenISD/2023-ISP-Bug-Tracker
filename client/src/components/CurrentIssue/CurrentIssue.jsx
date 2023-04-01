import React from "react";
import "./CurrentIssue.css"
import IssueList from '../IssueList/IssueList.jsx'

function CurrentIssue({issues}) {

  return (
    <div className="current-issues">
      {/* type issue G160 mr willis thx */}
      <IssueList issues={issues} />
    </div>
  );
}

export default CurrentIssue;
