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
      </nav>
      <Outlet />
    </>
    // <nav>
    //     <div className="nav-logo-container">
    //       <img src={Logo} alt="" />
    //     </div>
    //     <div className="navbar-links-container">
    //       <a href="">Home</a>
    //       <a href="">About Us</a>
    //       <a href="">Contact Us</a>
    //     </div>
    //   </nav>
    );
};

export default Navbar;