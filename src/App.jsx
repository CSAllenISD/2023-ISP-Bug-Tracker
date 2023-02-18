import React, { useState } from "react";
import AddIssue from './components/AddIssue/AddIssue.js'
import CurrentIssue from './components/CurrentIssue/CurrentIssue.js'
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Work from "./components/Home/Work";

// function App() {
//   const [addIssue, setAddIssue] = useState(true);

//   function showAddIssue() {
//     setAddIssue(true);
//   }

//   function showCurrentIssue() {
//     setAddIssue(false);
//   }

//   return (
//     <div className="App">
//       <h1>Issue Tracker</h1>
//       <div className="grey-card-container">
//         {addIssue ? <AddIssue /> : <CurrentIssue />}
//       </div>
//       <div className="view-selection-div">
//         <button className="view-button" onClick={() => showCurrentIssue()}>Current Issues</button>
//         <button className="view-button active-button" onClick={() => showAddIssue()}>Add Issue</button>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
    </div>
  );
}

export default App;
