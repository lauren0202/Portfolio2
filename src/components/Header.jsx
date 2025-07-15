import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header-nav">
      <div className="header-logo">
        <Link to="/" className="logo-link">MINIMUM</Link>
      </div>
      <div className="header-menu">
        <Link to="/info" className="menu-link">INFO</Link>
        <Link to="/work" className="menu-link">WORK</Link>
      </div>
    </nav>
  );
}

export default Header;