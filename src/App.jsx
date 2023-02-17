import React, { useState } from "react";
import AddIssuePage from './components/AddIssue/AddIssue.jsx'
import CurrentIssue from './components/CurrentIssue/CurrentIssue.jsx'
import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState();

  const [issues, setIssues] = useState([]);
  function showAddIssue() {
    setAddIssue(false);
  }

  function showCurrentIssue() {
    setAddIssue(true);
  }

  return (
    <div className="App">
      <h1>Event Tracker</h1>
      <div className="grey-card-container">
        {addIssue ? <CurrentIssue issues={issues} setIssues={setIssues}/> : <AddIssuePage issues={issues} setIssues={setIssues} />}
      </div>
      <div className="view-selection-div">
        <button className="view-button" onClick={() => showCurrentIssue()}>Current Events</button>
        <button className="view-button active-button" onClick={() => showAddIssue()}>Add Events</button>
      </div>
    </div>
  );
}

export default App;
