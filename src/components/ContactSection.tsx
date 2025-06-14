import React from "react";
import "../styles/contactSection.css";

export const ContactSection: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h2 className="contact-title">Get in touch with us</h2>
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
              <input type="tel" id="phone" className="form-input" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <input type="text" id="university" className="form-input" placeholder="University" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" id="course" className="form-input" placeholder="Course" />
            </div>
            <div className="form-group">
              <input type="text" id="year" className="form-input" placeholder="mm/dd/yyyy" />
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