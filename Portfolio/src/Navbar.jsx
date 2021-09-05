import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src="assets/logo.png" />
      </div>
      <div className="links">
        <a href="#" className="link">About</a>
        <a href="#projects" className="link">Projects</a>
        <a href="#connect" className="link">Connect</a>
      </div>
    </div>
  );
};

export default Navbar;
