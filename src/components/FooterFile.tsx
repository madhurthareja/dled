import "../styles/footerFile.css";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/dled-clear.png";

export const FooterWrapper = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section footer-about">
            <img className="footer-logo" src={logo} alt="DLED Logo" />
            <p className="footer-description">
              The Dhananjaya Lab for Education Design (DLED) at IIT Ropar is
              pioneering transformative approaches to learning in the digital
              age.
            </p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/educationdesignlab/posts/?feedView=all"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com/@dledlabs?si=zFC1fmeqjkFCRY8Y"
                className="social-link"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/research">Research</Link>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/collaborations">Collaborations</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li>
                <Link to="/comingsoon">Blogs</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <p>DLED, Super Academic Block</p>
                  <p>Indian Institute of Technology, Ropar</p>
                  <p>Rupnagar, Punjab 140001</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <p>dled@iitrpr.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 DLED, IIT Ropar. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
