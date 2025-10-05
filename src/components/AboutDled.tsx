import React from "react";
// import { useNavigate } from 'react-router-dom';
import "../styles/aboutDled.css";

export const AboutDLED: React.FC = () => {
  // const navigate = useNavigate();
  const title = "Learn VLED's Story";

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
          Discover the vision, values, and innovations driving VLED Lab as we
          explore how design, research, and technology come together to
          transform education.
        </p>
      </div>

      <div className="image-section">
      <div className="video-responsive">
        <iframe
          className="dled-video"
          src="https://www.youtube.com/embed/ChgEGN3EsyM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </section>
  );
};