import React from "react";
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
          <li>
            <Link to="/Calendar">Calendar</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>

    );
};

export default Navbar;