// pages/contact.tsx
import { useState } from 'react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState<'join' | 'collaborate'>('join');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
              <p className="lead mb-4">
                Interested in joining our team or collaborating on a project? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="nav nav-tabs nav-fill mb-4">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'join' ? 'active' : ''}`}
                    onClick={() => setActiveTab('join')}
                  >
                    Join Our Team
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'collaborate' ? 'active' : ''}`}
                    onClick={() => setActiveTab('collaborate')}
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
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
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
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
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