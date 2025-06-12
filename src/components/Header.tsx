import React from "react";
import "../styles/header.css";

export const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Background elements */}
      <div className="bg-top"></div>
      <div className="bg-bottom"></div>

      {/* Navigation - hidden on mobile, shown on desktop */}
      <nav className="nav-bar">
        <div className="nav-links">
          <a href="/research" className="nav-text">Research</a>
          <a href="/team" className="nav-text">Team</a>
          <a href="/events" className="nav-text">Events</a>
          <a href="/careers" className="nav-text">Careers</a>
          <a href="/blog" className="nav-text">Blog</a>
        </div>
        <button className="nav-button">
          <span className="nav-button-text">View Publications</span>
        </button>
      </nav>

      {/* Mobile menu icon - shown only on mobile */}
      <button className="menu-icon" aria-label="Menu"></button>

      {/* Content section */}
      <div className="content">
        <span className="subtitle">An IIT Ropar Initiative</span>
        <h1 className="title">Redefining Education Through Innovation</h1>
        <p className="description">
          The Dhananjaya Lab for Education Design (DLED) at IIT Ropar is pioneering
          transformative approaches to learning in the digital age.
        </p>
        <div className="cta-buttons">
          <button className="btn-black">
            <span>Learn More</span>
          </button>
          <button className="btn-outline">
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