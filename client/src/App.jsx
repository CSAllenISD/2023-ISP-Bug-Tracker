import React, { useState } from "react";
import AddIssue from './components/AddIssue/AddIssue.jsx'
import CurrentIssue from './components/CurrentIssue/CurrentIssue.jsx'
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Work from "./components/Home/Work";
import Navbar from "./components/Home/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="/" index element={<Home />}/>
        <Route path="AddIssue" element={<AddIssue />}/>
        <Route path="CurrentIssue" element={<CurrentIssue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
