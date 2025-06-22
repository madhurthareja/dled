import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/aboutDled.css";

export const AboutDLED: React.FC = () => {
  const navigate = useNavigate();
  const title = "Learn DLED's Story";

  const ButtonClickAbout = () => {
    navigate('/team'); 
  };
  return (
    <section className="about-dled-section">
      <div className="content-section">
        <h1 className="title">
          {title.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="word" style={{ whiteSpace: "pre" }}>
              {word.split("").map((char, i) => (
                <span key={i} className="letter">{char}</span>
              ))}
              {/* Add space after each word except the last */}
              {wordIdx !== title.split(" ").length - 1 && " "}
            </span>
          ))}
        </h1>
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