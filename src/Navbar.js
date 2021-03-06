import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tech Blog</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
