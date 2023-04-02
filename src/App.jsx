import React, { useState } from "react";
import Logo from "../../Assets/Logo.png";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
    <>
      <nav>
        <ul className="navbar-links-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddIssue">AddIssue</Link>
          </li>
          <li>
            <Link to="/CurrentIssue">CurrentIssues</Link>
          </li>
        </ul>
        <div class="dot"></div>
      </nav>
      <Outlet />
    </>
    );
};

export default Navbar;