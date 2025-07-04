import "../styles/footerFile.css";
import { Link } from 'react-router-dom';
import logo from '../assets/dled-clear.png'; // Adjust the path as necessary
// import footerBg from '../assets/simple-shiny.svg';

export const FooterWrapper = () => {
  return (
    <footer className="footer">
      {/* <img className="footer-bg-img" src= {footerBg} alt="" /> */}
      <div className="footer-content">

        <div className="footer-images">
          <img 
            className="footer-secondary-image" 
            src= {logo}
            alt="DLED Logo"
          />
        </div>

        
        <div className="footer-logo-section">
        <div className="footer-address">
          <h2>Our Location</h2>
          <p>DLED, Viswesarya Block</p>
          <p>Indian Institute of Technology, Ropar</p>
          <p>Rupnagar, Punjab 140001</p>
        </div>

          <img 
            className="footer-main-image"
            src="https://c.animaapp.com/SP71lV0J/img/image-9@2x.png"
            alt="Map of DLED Location"
          />
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
              <li><Link to="/comingsoon">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/comingsoon">Blog</Link></li>
              <li><Link to="/careers">Career</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li><a href = "https://www.linkedin.com/company/educationdesignlab/posts/?feedView=all">LinkedIn</a></li>
              <li><a href = "">Youtube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};