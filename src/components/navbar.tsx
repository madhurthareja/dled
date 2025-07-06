import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "../styles/header.css";
import logo from '../assets/dled-iit-clear.png';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="bg-top"></div>
      <div className="bg-bottom"></div>
      <div className="header-top">
        <Link to="/">
          <img src={logo} alt="DLED and IIT Logos" className="header-logo" />
        </Link>
        <nav className="nav-bar">
          <div className="nav-links">
            <Link to="/research" className="nav-text">Research</Link>
            <Link to="/team" className="nav-text">Team</Link>
            <Link to="/events" className="nav-text">Events</Link>
            <Link to="/careers" className="nav-text">Careers</Link>
            <Link to="/comingsoon" className="nav-text">Blog</Link>
          </div>
          <Link to="/collaborations">
            <button className="nav-button">
              <span className="nav-button-text">Collaborations</span>
            </button>
          </Link>
        </nav>
      </div>
      <button
        className="menu-icon"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      ></button>
      {menuOpen && (
        <nav className="mobile-nav-dropdown">
          <Link to="/research" className="nav-text" onClick={handleNavLinkClick}>Research</Link>
          <Link to="/team" className="nav-text" onClick={handleNavLinkClick}>Team</Link>
          <Link to="/events" className="nav-text" onClick={handleNavLinkClick}>Events</Link>
          <Link to="/careers" className="nav-text" onClick={handleNavLinkClick}>Careers</Link>
          <Link to="/comingsoon" className="nav-text" onClick={handleNavLinkClick}>Blog</Link>
          <Link to="/collaborations">
            <button className="nav-button">
              <span className="nav-button-text">Collaborations</span>
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};