import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/aboutDled.css";

export const AboutDLED: React.FC = () => {
  const navigate = useNavigate();

  const ButtonClickAbout = () => {
    navigate('/team'); 
    window.scrollTo(0, 0);
  };
  return (
    <section className="about-dled-section">
      <div className="content-section">
        <h1 className="title">Getting to Know More about DLED</h1>
        <p className="description">
          Discover the vision, values, and innovations driving DLED Lab as we
          explore how design, research, and technology come together to
          transform education.
        </p>
        <button className="about-button" onClick={ButtonClickAbout}>
          <span>About Us</span>
        </button>
      </div>

      <div className="image-section">
        <div className="image-container">
          <div className="image-background"></div>
          <div className="frame-wrapper">
            <div className="frame-icon">
              {/* To insert video here */}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};