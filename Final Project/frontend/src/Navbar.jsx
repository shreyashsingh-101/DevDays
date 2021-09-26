import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="head">
      <Link className="link__main" to="/">
          The Chat App  
      </Link>
      </div>
      <div className="links">

        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
