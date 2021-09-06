import React from "react";
import "./Navbar.css";

import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src="assets/logo.png" />
      </div>
      <div className="links">
      <Link
          className="link" 
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >About</Link>
        <Link
          className="link" 
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Projects</Link>
        <Link
          className="link" 
          activeClass="active"
          to="connect"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Connect</Link>
       
      </div>
    </div>
  );
};

export default Navbar;
