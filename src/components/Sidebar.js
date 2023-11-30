import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  return (
    <aside>
      <Link to="/" className="link">
        Project
      </Link>
      <Link to="/art" className="link">
        Art
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
    </aside>
  );
};

export default Sidebar;
