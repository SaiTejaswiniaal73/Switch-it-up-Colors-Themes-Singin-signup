import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ isTheme }) => {
  return (
    <div className="navbar" style={{ backgroundColor: isTheme ? "#222" : "navy", color: isTheme ? "white" : "aliceblue" }}>
      <h1 className="store_name">Toggle game</h1>
      <div className="nav_links">
        <Link className="nav_span" to="/signInUp"><span>SignInUp</span></Link>
        <Link className="nav_span" to="/quotes"><span>Quotes</span></Link>
        <Link className="nav_span" to="/color/1"><span>Color</span></Link>
        <Link className="nav_span" to="/theme/1"><span>Theme</span></Link>
      </div>
    </div>
  );
};

export default Navbar;
