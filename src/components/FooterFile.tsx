import "../styles/footerFile.css";
import { Link } from 'react-router-dom';

export const FooterWrapper = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <div className="footer-address">
            <h2>Our Location</h2>
            <p>DLED, Viswesarya Block</p>
            <p>Indian Institute of Technology Ropar</p>
            <p>Rupnagar, Punjab 140001</p>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Features</h3>
            <ul>
              <li><Link to="/team">Research Team</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li><a href = "">LinkedIn</a></li>
              <li><a href = "">Instagram</a></li>
              <li><a href = "">Twitter</a></li>
              <li><a href = "">Youtube</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-images">
          <img 
            className="footer-main-image" 
            src="https://c.animaapp.com/SP71lV0J/img/image-9@2x.png" 
            alt="Footer graphic"
          />
          <img 
            className="footer-secondary-image" 
            src="https://c.animaapp.com/SP71lV0J/img/whatsapp-image-2025-05-28-at-21-40-01-657f409f-1-1.png" 
            alt="Secondary graphic"
          />
        </div>
      </div>
    </footer>
  );
};