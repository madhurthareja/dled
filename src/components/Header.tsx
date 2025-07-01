import { Link } from 'react-router-dom'; // useNavigate
import React, { useState} from 'react';
import "../styles/header.css";
import logo from '../assets/dled-clear.png';
import { TypedText } from './TypedText';

export const Header: React.FC = () => {
  // const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const ButtonClickContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  setMenuOpen(false);
  };

  /*
  const ButtonClickAbout = () => {
    navigate('/about');
    setMenuOpen(false);
  };
  */

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
            <Link to="/comingsoon" className="nav-text">Blog</Link>
          </div>

          <Link to="/comingsoon">
          <button className="nav-button">
            <span className="nav-button-text">View Publications</span>
          </button>
          </Link>
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
          <Link to="/comingsoon" className="nav-text" onClick={handleNavLinkClick}>Blog</Link>

          <Link to="/comingsoon">
          <button className="nav-button">
            <span className="nav-button-text">View Publications</span>
          </button>
          </Link>
        </nav>
      )}

      {/* Content section */}
      <div className="hero-flex-container">
      <div className="content">
      <span className="subtitle">An IIT Ropar Initiative</span>
      <h1 className="title">
        <TypedText text="Redefining Education Through Innovation" />
      </h1>

        <p className="description">
          The Dhananjaya Lab for Education Design (DLED) at IIT Ropar is pioneering
          transformative approaches to learning in the digital age.
        </p>
        <div className="cta-buttons">
          <button className="btn-black" onClick={() => {
          const element = document.getElementById('research-approach');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
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
            alt="Yellow semicircle"
          />
          <img
            className="subtract subtract-2"
            src="https://c.animaapp.com/SP71lV0J/img/subtract-1.svg"
            alt="Decorative element"
          />
          <img
            className="highschool-img mx-auto d-block" 
            src = "https://images.unsplash.com/photo-1667835949495-78a1ea9ecd77?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://c.animaapp.com/SP71lV0J/img/highschool-student-2021-09-24-03-36-25-utc-min-ccexpress-1.png"
            alt="Pink shiny patterned AI sphere"
          />
        </div>
      </div>
      </div>
      
    </header>
  );
};