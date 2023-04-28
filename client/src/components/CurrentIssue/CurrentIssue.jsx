import React, { useState } from "react";
import "./CurrentIssue.css";

function CurrentIssue() {
  const [issues, setIssues] = useState([
    {
      id: 1,
      assigned: "Bob",
      priority: "Medium",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      assigned: "Rose",
      priority: "High",
      description: "Proin lobortis, augue volutpat vestibulum venenatis, nisi lorem imperdiet nisl, eget egestas libero ex vitae urna.",
    },
    {
      id: 3,
      assigned: "Matt",
      priority: "Extra-High",
      description: "Suspendisse consequat lorem nec dictum mollis. Donec sodales vehicula malesuada.",
    },
    {
      id: 4,
      assigned: "Aidon",
      priority: "Medium",
      description: "uisque sit amet dui id lacus molestie condimentum.",
    },
    {
      id: 5,
      assigned: "John",
      priority: "Low",
      description: "Sed eu enim at mi sodales sagittis.",
    },
  ]);

  const removeIssue = (index) => {
    const newIssues = [...issues];
    newIssues.splice(index, 1);
    setIssues(newIssues);
  };
  
  const [sortType, setSortType] = useState("default");

  const sortIssues = () => {
    const sortedIssues = [...issues].sort((a, b) => {
      const priorities = ["Extra-High", "High", "Medium", "Low"];
      if (sortType === "priority-desc") {
        return priorities.indexOf(b.priority) - priorities.indexOf(a.priority);
      }
      return priorities.indexOf(a.priority) - priorities.indexOf(b.priority);
    });
    setIssues(sortedIssues);
  };

  const handleSortChange = (e) => {
    const newSortType = e.target.value;
    setSortType(newSortType);
  };

  return (
    <div className="App">
      <h1>Current Issues</h1>
      <select value={sortType} onChange={handleSortChange}>
        <option value="default">Sort by Priority</option>
        <option value="priority-desc">Sort by Priority (Descending)</option>
      </select>
      <button onClick={sortIssues}>Sort</button>
      <div className="grey-card-container">
        <div className="current-issues">
          {issues.map((issue, index) => (
            <div key={issue.id} className="indv-issue">
              <button onClick={() => removeIssue(index)} className="close-issue">Close Issue</button>
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
