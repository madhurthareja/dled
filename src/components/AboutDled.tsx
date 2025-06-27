import React from "react";
// import { useNavigate } from 'react-router-dom';
import "../styles/aboutDled.css";

export const AboutDLED: React.FC = () => {
  // const navigate = useNavigate();
  const title = "Learn DLED's Story";

  return (
    <section className="about-dled-section">
      <div className="content-section" >
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
      </div>

      <div className="image-section">
        <div className="image-container">
            <video
              className="dled-video"
              controls
              width="100%"
              style={{ maxHeight: '100%', objectFit: 'cover', margin: '0 auto', marginTop: '65px', marginLeft: '10px', marginRight: '10px' }}
            >
              <source src="/videos/dled-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </section>
  );
};