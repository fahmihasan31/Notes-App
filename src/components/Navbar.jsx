import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Notes App</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Note</Link>
        <Link to="/archive">Archive</Link>
      </div>
    </nav>
  );
};

export default Navbar;
