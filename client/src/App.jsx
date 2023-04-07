import React from "react";
import AddIssue from './components/AddIssue/AddIssue.jsx'
import CurrentIssue from './components/CurrentIssue/CurrentIssue.jsx'
import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar/Calendar.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="/" index element={<Home />}/>
        <Route path="AddIssue" element={<AddIssue />}/>
        <Route path="CurrentIssue" element={<CurrentIssue />} />
        <Route path="Calendar" element={<Calendar /> } />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;