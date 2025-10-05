import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/meetTheMinds.css";

export const MeetTheMinds: React.FC = () => {
  const navigate = useNavigate();
  const title = "Meet the Minds Powering VLED";

  const ButtonClickTeam = () => {
    navigate('/team'); 
  };

  const ButtonClickMentor = () => {
    navigate('/contact?tab=collaborate');
  };

  return (
    <section className="meet-the-minds">
      <div className="image-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
        {[...Array(9)].map((_, index) => {
          const imageMap: { [key: string]: string } = {
            "0": "/images/meenakshi3.png",
            "2": "/images/sakshi-sharma2.jpg",
            "4": "/images/dr-sudarshan2.png",
            "6": "/images/shivani-aggarwal4.png",
            "8": "/images/rohit-sharma2.jpg"
          };
          return (
            <div
              key={index}
              className={`grid-item ${index === 2 || index === 6 ? "yellow-bg" : ""}`}
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                background: "none", // "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
                {imageMap[index.toString()] ? (
                <img
                  src={imageMap[index.toString()]}
                  alt={`Grid ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(0.97)",
                    overflow: "hidden",
                    borderRadius: "10px"
                  }}
                />
              ) : null}
            </div>
          );
        })}
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
          <button className="primary-button" onClick={ButtonClickTeam}>Browse Our Teams</button>
          <button className="secondary-button" onClick={ButtonClickMentor}>Collaborate with Us</button>
        </div>
      </div>
    </section>
  );
};