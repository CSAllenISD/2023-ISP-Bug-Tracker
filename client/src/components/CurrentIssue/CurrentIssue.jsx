import React, { useState } from "react";
import "./CurrentIssue.css";

function CurrentIssue() {
  const [issues, setIssues] = useState([
    {
      id: 1,
      assigned: "Bob",
      priority: "High",
      description: "Short Description of the Project describing the issue",
    },
    {
      id: 2,
      assigned: "Rose",
      priority: "High",
      description: "Short Description of the Project describing the issue",
    },
    {
      id: 3,
      assigned: "Matt",
      priority: "High",
      description: "Short Description of the Project describing the issue",
    },
  ]);

  const removeIssue = (index) => {
    const newIssues = [...issues];
    newIssues.splice(index, 1);
    setIssues(newIssues);
  };

  return (
    <div className="App">
      <h1>Current Issues</h1>
      <div className="grey-card-container">
        <div className="current-issues">
          {issues.map((issue, index) => (
            <div key={issue.id} className="indv-issue">
              <button onClick={() => removeIssue(index)} className="close-issue">
                Close Issue
              </button>
              <p>
                Assigned<span>{issue.assigned}</span>
              </p>
              <p>
                Priority<span>{issue.priority}</span>
              </p>
              <p>Description</p>
              <p className="description-text">{issue.description}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentIssue;