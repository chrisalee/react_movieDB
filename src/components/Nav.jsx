import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/react_movieDB">
          <h1>Movie DB</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/react_movieDB">Home</Link>
          </li>
          <li>
            <Link to="/react_movieDB/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
