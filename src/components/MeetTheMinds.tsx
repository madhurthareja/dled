import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/meetTheMinds.css";

export const MeetTheMinds: React.FC = () => {
  const navigate = useNavigate();
  const title = "Meet the Minds Powering DLED Innovation";

  const ButtonClickTeam = () => {
    navigate('/team'); 
  };

  const ButtonClickMentor = () => {
    navigate('/contact'); 
  };

  return (
    <section className="meet-the-minds">
      {/* Image Grid */}
      <div className="image-grid">
        {[...Array(9)].map((_, index) => (
          <div 
            key={index} 
            className={`grid-item ${index === 2 || index === 6 ? "yellow-bg" : ""}`}
          >
            {/* In a real implementation, you would use actual images */}
            {/* <img src={teamMemberImages[index]} alt={`Team member ${index + 1}`} /> */}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2 className="title">
          {title.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="word" style={{ whiteSpace: "pre" }}>
                {word.split("").map((char, i) => (
                  <span key={i} className="letter">{char}</span>
                ))}
                {/* Add space after each word except the last */}
                {wordIdx !== title.split(" ").length - 1 && " "}
              </span>
            ))}
        </h2>
        <p className="description">
          Meet the brilliant minds behind Dhananjaya Lab's innovative research and educational designs.
        </p>
        
        <div className="button-group">
          <button className="primary-button" onClick={ButtonClickTeam}>Browse Team</button>
          <button className="secondary-button" onClick={ButtonClickMentor}>Become a Mentor</button>
        </div>
      </div>
    </section>
  );
};