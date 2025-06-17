import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import dled from '../assets/dled.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
      <div className="container">
         <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={dled} alt="DLED Logo" height="40" className="me-2" />
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavItem path="/research" text="Research" currentPath={location.pathname} />
            <NavItem path="/team" text="Team" currentPath={location.pathname} />
            <NavItem path="/events" text="Events" currentPath={location.pathname} />
            <NavItem path="/careers" text="Careers" currentPath={location.pathname} />
            <NavItem path="/blog" text="Blog" currentPath={location.pathname} />
            <li className="nav-item ms-lg-3">
              <Link
                to="/publications"
                className="btn btn-dark rounded-pill px-4 py-2 ms-lg-2"
              >
                View Publications
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  path: string;
  text: string;
  currentPath: string;
}

const NavItem = ({ path, text, currentPath }: NavItemProps) => {
  const isActive = currentPath === path;
  
  return (
    <li className="nav-item mx-lg-2">
      <Link 
        className={`nav-link px-lg-3 py-2 py-lg-1 ${isActive ? 'active' : ''}`}
        to={path}
      >
        {text}
        {isActive && <div className="nav-active-indicator"></div>}
      </Link>
    </li>
  );
};

export default Navbar;