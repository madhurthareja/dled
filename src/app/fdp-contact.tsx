import { FDPNavbar } from '../components/FDPNavbar';
import '../styles/fdp.css';

const FDPContact = () => {
  return (
    <div className="fdp-page">
      <FDPNavbar activePage="contact" />
      
      {/* Header Section */}
      <section className="fdp-hero fdp-sub-hero">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fdp-hero-title">Contact Us</h1>
              <p className="fdp-hero-subtitle">
                Get in touch with our program coordinators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              
              {/* Contact Information */}
              <div className="row mb-5">
                <div className="col-md-6 mb-4">
                  <div className="contact-card p-4 border rounded h-100">
                    <div className="text-center mb-3">
                      <i className="fas fa-university fa-3x text-primary mb-3"></i>
                      <h4>Program Office</h4>
                    </div>
                    <p><strong>VLED Lab, IIT Ropar</strong></p>
                    <p>
                      <i className="fas fa-map-marker-alt me-2"></i>
                      Indian Institute of Technology Ropar<br />
                      Rupnagar, Punjab, India (140001)
                    </p>
                    <p>
                      <i className="fas fa-phone me-2"></i>
                      +91 76268-14400
                    </p>
                    <p>
                      <i className="fas fa-envelope me-2"></i>
                      mmttp@iitrpr.ac.in
                    </p>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="contact-card p-4 border rounded h-100">
                    <div className="text-center mb-3">
                      <i className="fas fa-users fa-3x text-success mb-3"></i>
                      <h4>Program Coordinators</h4>
                    </div>
                    <div className="mb-3">
                      <strong>Ms. Pavani</strong><br />
                      <small>Senior Program Coordinator</small><br />
                      <i className="fas fa-envelope me-2"></i>
                      pavani@iitrpr.ac.in
                    </div>
                    <div>
                      <strong>Ms. Shreya</strong><br />
                      <small>Program Coordinator</small><br />
                      <i className="fas fa-envelope me-2"></i>
                      shreya@iitrpr.ac.in
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-section">
                <h3 className="text-center mb-4">Send us a Message</h3>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input type="text" className="form-control" id="firstName" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input type="text" className="form-control" id="lastName" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="institution" className="form-label">Institution/College</label>
                    <input type="text" className="form-control" id="institution" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <select className="form-select" id="subject" required>
                      <option value="">Choose a subject...</option>
                      <option value="registration">Registration Query</option>
                      <option value="technical">Technical Requirements</option>
                      <option value="curriculum">Curriculum Information</option>
                      <option value="certification">Certification Query</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea className="form-control" id="message" rows={5} required></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn fdp-cta-btn apply-btn px-5">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Office Hours */}
              <div className="office-hours mt-5 p-4 bg-light rounded">
                <h4 className="text-center mb-3">Office Hours</h4>
                <div className="row text-center">
                  <div className="col-md-4">
                    <strong>Monday - Friday</strong><br />
                    9:00 AM - 5:00 PM
                  </div>
                  <div className="col-md-4">
                    <strong>Saturday</strong><br />
                    10:00 AM - 2:00 PM
                  </div>
                  <div className="col-md-4">
                    <strong>Response Time</strong><br />
                    Within 24 hours
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FDPContact;