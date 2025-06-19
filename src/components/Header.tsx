import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "../styles/header.css";
import logo from '../assets/dled-clear.png';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const ButtonClickContact = () => {
    navigate('/contact'); 
    setMenuOpen(false);
  };
  const ButtonClickAbout = () => {
    navigate('/about'); 
    setMenuOpen(false);
  };

  // Close menu when a link is clicked
  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Background elements */}
      <div className="bg-top"></div>
      <div className="bg-bottom"></div>

      <div className="header-top">
        <Link to="/">
          <img src={logo} alt="DLED Logo" className="header-logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-bar">
          <div className="nav-links">
            <Link to="/research" className="nav-text">Research</Link>
            <Link to="/team" className="nav-text">Team</Link>
            <Link to="/events" className="nav-text">Events</Link>
            <Link to="/careers" className="nav-text">Careers</Link>
            <Link to="/blog" className="nav-text">Blog</Link>
          </div>
          <button className="nav-button">
            <span className="nav-button-text">View Publications</span>
          </button>
        </nav>
      </div>

      {/* Mobile menu icon */}
      <button
        className="menu-icon"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      ></button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="mobile-nav-dropdown">
          <Link to="/research" className="nav-text" onClick={handleNavLinkClick}>Research</Link>
          <Link to="/team" className="nav-text" onClick={handleNavLinkClick}>Team</Link>
          <Link to="/events" className="nav-text" onClick={handleNavLinkClick}>Events</Link>
          <Link to="/careers" className="nav-text" onClick={handleNavLinkClick}>Careers</Link>
          <Link to="/blog" className="nav-text" onClick={handleNavLinkClick}>Blog</Link>
          <button className="nav-button" onClick={handleNavLinkClick}>
            <span className="nav-button-text">View Publications</span>
          </button>
        </nav>
      )}

      {/* Content section */}
      <div className="content">
        <span className="subtitle">An IIT Ropar Initiative</span>
        <h1 className="title">Redefining Education Through Innovation</h1>
        <p className="description">
          The Dhananjaya Lab for Education Design (DLED) at IIT Ropar is pioneering
          transformative approaches to learning in the digital age.
        </p>
        <div className="cta-buttons">
          <button className="btn-black" onClick={ButtonClickAbout}>
            <span>Learn More</span>
          </button>
          <button className="btn-outline" onClick={ButtonClickContact}>
            <span>Contact us</span>
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="image-group">
        <div className="overlap-image">
          <img
            className="subtract"
            src="https://c.animaapp.com/SP71lV0J/img/subtract.svg"
            alt="Decorative element"
          />
          <img
            className="subtract subtract-2"
            src="https://c.animaapp.com/SP71lV0J/img/subtract-1.svg"
            alt="Decorative element"
          />
          <img
            className="highschool-img"
            src="https://c.animaapp.com/SP71lV0J/img/highschool-student-2021-09-24-03-36-25-utc-min-ccexpress-1.png"
            alt="Highschool student"
          />
        </div>
      </div>
    </header>
  );
};