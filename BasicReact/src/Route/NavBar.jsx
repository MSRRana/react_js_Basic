import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">
            <button>Login</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
