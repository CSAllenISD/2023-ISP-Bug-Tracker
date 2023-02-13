import React, { useState } from "react";
import AddIssue from './components/AddIssue/AddIssue.jsx'
import CurrentIssue from './components/CurrentIssue/CurrentIssue.jsx'
import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState();
  const [issue, setIssue] = useState();

  function showAddIssue() {
    setAddIssue(false);
  }

  function showCurrentIssue() {
    setAddIssue(true);
  }

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="grey-card-container">
        {addIssue ? <CurrentIssue /> : <AddIssue />}
      </div>
      <div className="view-selection-div">
        <button className="view-button" onClick={() => showCurrentIssue()}>Current Issues</button>
        <button className="view-button active-button" onClick={() => showAddIssue()}>Add Issue</button>
      </div>
    </div>
  );
}

export default App;
