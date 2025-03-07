import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🚀 PERSIST STARTUPATHON</div>
      <ul className="nav-links">
        <li><a href="/">Ongoing Startupathon</a></li>
        <li><a href="/">Completed Startupathon</a></li>
        <li><a href="/">Guide</a></li>
        <li><a href="/">How to Win</a></li>
        <li><a href="/">Mentor Network</a></li>
      </ul>
      <button className="apply-btn">Apply for Fellowship 🚀</button>
    </nav>
  );
}

export default Navbar;
