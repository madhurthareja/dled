import React, { useState } from "react";
import "../styles/contactSection.css";

export const ContactSection: React.FC = () => {
  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}/${today.getFullYear()}`;
  const title = "Get in Touch with Us";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: formattedDate,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwVfwqhrArROPDB_Cx0DqQZCMGeIuSI4nGp3qECjk2JHWbph-YB7P8OGOWI8RKWp6KaFA/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "text/plain" },
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", date: formattedDate, message: "" });
      } else {
        alert("Submission failed: " + response.statusText);
      }
    } catch (err) {
      alert("Submission error: " + err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          Discover the vision, values, and innovations driving VLED Lab as we explore how design, research, and technology come together to transform education.
        </p>
      </div>
      
      <div className="contact-form-wrapper">
        <h3 className="form-title">Contact Form</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="date"
                className="form-input"
                placeholder="mm/dd/yyyy"
                value={formData.date}
                readOnly
              />
            </div>
          </div>
          <div className="form-group full-width">
            <textarea
              id="message"
              rows={4}
              className="form-textarea"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {submitSuccess && <div className="success-message">Thank you! Your message has been sent.</div>}
        </form>
      </div>
    </div>
  );
};