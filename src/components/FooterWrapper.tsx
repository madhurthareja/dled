import "../styles/footerWrapper-style.css";
import { Link } from 'react-router-dom';


export const FooterWrapper = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="frame-14">
          <div className="frame-15">
            <div className="text-wrapper-27">Features</div>

            <div className="frame-16">
              <Link to="/research" className="text-wrapper-28">Research</Link>

              <Link to="/team" className="text-wrapper-29">Team</Link>

              <Link to="/events" className="text-wrapper-29">Events</Link>
            </div>
          </div>

          <div className="frame-15">
            <Link to="/about" className="text-wrapper-27">About</Link>

            <div className="frame-16">
              <Link to="/about" className="text-wrapper-28">About Us</Link>

              <Link to="/contact" className="text-wrapper-29">Contact Us</Link>

              <div className="text-wrapper-29">Blog</div>

              <Link to="/careers" className="text-wrapper-29">Career</Link>
            </div>
          </div>

          <div className="frame-15">
            <div className="text-wrapper-27">Follow Us</div>

            <div className="frame-16">
              <a href="https://linkedin.com/company/educationdesignlab"> Linkedin </a>

              <div className="text-wrapper-29">Instagram</div>

              <div className="text-wrapper-29">Twitter</div>

              <div className="text-wrapper-29">Youtube</div>
            </div>
          </div>
        </div>

        <img
          className="image-6"
          alt="Image"
          src="https://c.animaapp.com/SP71lV0J/img/image-9@2x.png"
        />

        <img
          className="whatsapp-image"
          alt="Whatsapp image"
          src="https://c.animaapp.com/SP71lV0J/img/whatsapp-image-2025-05-28-at-21-40-01-657f409f-1-1.png"
        />
      </footer>
    </div>
  );
};
