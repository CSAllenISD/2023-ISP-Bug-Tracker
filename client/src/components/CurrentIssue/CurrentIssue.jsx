import React from "react";
import "./CurrentIssue.css"

function remove() {
  var element = document.getElementsByClassName("indv-issue")[0];
  element.remove()
}

function CurrentIssue() {
  return (
    <div className="App">
    <h1>Current Issues</h1>
    <div className="grey-card-container">
    <div className="current-issues">
      <div className="indv-issue">
      <button onClick={remove} className="close-issue">Close Issue</button>
      <p>Assigned<span>Bob</span></p>
      <p>Priority<span>High</span></p>
      <p>Description</p>
      <p className="description-text">Short Description of the Project describing the issue</p>
      <hr />
      </div>
      <div className="indv-issue">
      <button onClick={remove} className="close-issue">Close Issue</button>
      <p>Assigned<span>Rose</span></p>
      <p>Priority<span>High</span></p>
      <p>Description</p>
      <p className="description-text">Short Description of the Project describing the issue</p>
      <hr />
      </div>
      <div className="indv-issue">
      <button onClick={remove} className="close-issue">Close Issue</button>
      <p>Assigned<span>Matt</span></p>
      <p>Priority<span>High</span></p>
      <p>Description</p>
      <p className="description-text">Short Description of the Project describing the issue</p>
      <hr />
      </div>
    </div>
    </div>
    </div>
  );
}

export default CurrentIssue;
