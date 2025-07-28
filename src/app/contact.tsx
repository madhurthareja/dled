// pages/contact.tsx
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/researchPage.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    resumeLink: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const subjectFromUrl = searchParams.get("subject");
  const [activeTab, setActiveTab] = useState<"join" | "collaborate">(
    tabFromUrl === "collaborate" ? "collaborate" : "join"
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
    resumeLink: "",
  };

  useEffect(() => {
    if (tabFromUrl === "collaborate" || tabFromUrl === "join") {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  useEffect(() => {
    if (subjectFromUrl) {
      setFormData((prev) => ({ ...prev, subject: subjectFromUrl }));
    }
  }, [subjectFromUrl]);

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => setSubmitSuccess(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  const handleTabChange = (tab: "join" | "collaborate") => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    const payload = {
      category: activeTab,
      ...formData,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbydzEZ89EhQ-0tI4Hvsc5jC50wo3iq_bYjFG7u5aq3gM2PSQWtoJmeA48t8CjXTgJvvkw/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData(initialFormData);
      } else {
        alert("Submission failed: " + response.statusText);
      }
    } catch (err) {
      alert("Submission error: " + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>

      {activeTab === "join" ? (
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
      ) : (
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Collaboration Type
          </label>
          <select
            className="form-select"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select collaboration type</option>
            <option value="Research">Research Partnership</option>
            <option value="Project">Project Collaboration</option>
            <option value="Education">Educational Initiative</option>
            <option value="Other">Other</option>
          </select>
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          {activeTab === "join" ? "Message" : "Details"}
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {activeTab === "join" && (
        <div className="mb-3">
          <label htmlFor="resumeLink" className="form-label">
            Resume/CV Link
          </label>
          <input
            type="url"
            className="form-control"
            id="resumeLink"
            name="resumeLink"
            value={formData.resumeLink}
            onChange={handleChange}
            placeholder="Paste your resume link here"
          />
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={isSubmitting}
        style={{
          backgroundColor: "rgb(233, 103, 52)",
          borderColor: "rgb(233, 103, 52)",
        }}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>

      {submitSuccess && (
        <div className="alert alert-success mt-3 mb-0">
          Thank you for your{" "}
          {activeTab === "join" ? "interest" : "collaboration request"}! We'll
          get back to you soon.
        </div>
      )}
    </form>
  );

  return (
    <div className="contact-page">
      <section
        className="hero-section text-dark py-5"
        style={{
          background:
            "linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 85%)",
        }}
      >
        <div className="container py-4">
          <h1 className="display-4 fw-bold mb-4 mt-3">Get In Touch</h1>
          <p className="lead text-secondary mb-4 fs-4">
            Interested in joining our team or collaborating on a project? <br />{" "}
            We’d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="nav nav-tabs nav-fill mb-4">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "join" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("join")}
                  >
                    Join Our Team
                  </button>
                  <button
                    className={`nav-link ${
                      activeTab === "collaborate" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("collaborate")}
                  >
                    Collaborate With Us
                  </button>
                </li>
              </ul>

              <div className="tab-content p-4 border border-top-0 rounded-bottom">
                <h3 className="mb-4">
                  {activeTab === "join"
                    ? "Interested in joining our team?"
                    : "Collaboration Opportunities"}
                </h3>
                <p className="mb-4">
                  {activeTab === "join"
                    ? "We're always looking for talented individuals to join our mission of transforming education. Fill out the form and we'll get back to you."
                    : "Interested in collaborating on research, projects, or educational initiatives? Tell us about your ideas!"}
                </p>
                {renderForm()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
