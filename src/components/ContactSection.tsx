import React from "react";
import "../styles/contactSection.css";

export const ContactSection: React.FC = () => {

  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}/${today.getFullYear()}`;
  const title = "Get in Touch with DLED Lab";

  return (
    <div id="contact" className="contact-container">
      <div className="contact-text">
        <h2 className="contact-title">
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
        <p className="contact-description">
          Discover the vision, values, and innovations driving DLED Lab as we explore how design, research, and technology come together to transform education.
        </p>
      </div>
      
      <div className="contact-form-wrapper">
        <h3 className="form-title">Contact Form</h3>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="full-name" className="form-input" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <input type="email" id="email" className="form-input" placeholder="Email" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="year"
                className="form-input"
                placeholder="mm/dd/yyyy"
                value={formattedDate}
                readOnly
              />
            </div>
          </div>

          <div className="form-group full-width">
            <textarea id="message" rows={4} className="form-textarea" placeholder="Message"></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};