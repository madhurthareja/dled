// pages/contact.tsx
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import "../styles/researchPage.css";
import { Navbar } from '../components/navbar';

// https://script.google.com/macros/s/AKfycbzTeD58qfv5Q1lPbmV4U1757lpjSoNMCfp1Jh6tsFeOsAhKTcJ8P_OkaQPxbcZyQhi9ag/exec

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab');
  const subjectFromUrl = searchParams.get('subject');
  const [activeTab, setActiveTab] = useState(tabFromUrl === 'collaborate' ? 'collaborate' : 'join');


  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl === 'collaborate' || tabFromUrl === 'join') {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    if (subjectFromUrl) {
      setFormData(prev => ({
        ...prev,
        subject: subjectFromUrl,
      }));
    }
  }, [subjectFromUrl]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  

  // submits form to Google Sheet
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitSuccess(false);

  const category = activeTab; // "join" or "collaborate"
  const payload = {
    category,
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzTeD58qfv5Q1lPbmV4U1757lpjSoNMCfp1Jh6tsFeOsAhKTcJ8P_OkaQPxbcZyQhi9ag/exec', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'text/plain', // for Apps Script CORS - Google Sheet compatibility
      },
    });
    if (response.ok) {
      setSubmitSuccess(true);
      setFormData(initialFormData); // clears the form
    } else {
      alert("Submission failed: " + response.statusText);
    }
  } catch (err) {
    alert("Submission error: " + err);
  } finally {
    setIsSubmitting(false);
  }
};

  useEffect(() => {
  let timer: number;
  if (submitSuccess) {
    timer = setTimeout(() => {
      setSubmitSuccess(false);
    }, 10000); // 10 seconds
  }
  return () => clearTimeout(timer);
}, [submitSuccess]);



  return (
    <div className="contact-page">
      <Navbar /> {/* Add Navbar at the top */}
      {/* Hero Section */}
      <section className="hero-section text-dark py-5" style={{
        background: 'linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 85%)'
      }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4 mt-3">Get In Touch</h1>
              <p className="lead text-secondary mb-4 fs-4">
                Interested in joining our team or collaborating on a project? <br></br> We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="nav nav-tabs nav-fill mb-4">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'join' ? 'active' : ''}`}
                    onClick={() => handleTabChange('join')}
                  >
                    Join Our Team
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'collaborate' ? 'active' : ''}`}
                    onClick={() => handleTabChange('collaborate')}
                  >
                    Collaborate With Us
                  </button>
                </li>
              </ul>

              {activeTab === 'join' ? (
                <div className="tab-content p-4 border border-top-0 rounded-bottom">
                  <h3 className="mb-4">Interested in joining our team?</h3>
                  <p className="mb-4">
                    We're always looking for talented individuals to join our mission of transforming education.
                    Please fill out the form below and we'll get back to you about current opportunities.
                  </p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
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
                      <label htmlFor="email" className="form-label">Email</label>
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
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="resume" className="form-label">Resume/CV (Optional)</label>
                      <input
                        type="file"
                        className="form-control"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting} style= {{ backgroundColor: 'rgb(233, 103, 52)', borderColor: 'rgb(233, 103, 52)' }}>
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                    {submitSuccess && (
                      <div className="alert alert-success mt-3 mb-0">
                        Thank you for your interest! We'll get back to you soon.
                      </div>
                    )}
                  </form>
                </div>
              ) : (
                <div className="tab-content p-4 border border-top-0 rounded-bottom">
                  <h3 className="mb-4">Collaboration Opportunities</h3>
                  <p className="mb-4">
                    Interested in collaborating on research, projects, or educational initiatives?
                    Tell us about your ideas and how you'd like to work together.
                  </p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
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
                      <label htmlFor="email" className="form-label">Email</label>
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
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Collaboration Type</label>
                      <select className="form-select" id="subject" name="subject" required>
                        <option value="">Select collaboration type</option>
                        <option value="Research">Research Partnership</option>
                        <option value="Project">Project Collaboration</option>
                        <option value="Education">Educational Initiative</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Details</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting} style= {{ backgroundColor: 'rgb(233, 103, 52)', borderColor: 'rgb(233, 103, 52)' }}>
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                    {submitSuccess && (
                      <div className="alert alert-success mt-3 mb-0">
                        Thank you for your collaboration request! We'll review it and get back to you soon.
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;