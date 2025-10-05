import { FDPNavbar } from '../components/FDPNavbar';
import '../styles/fdp.css';

const FDPAbout = () => {
  return (
    <div className="fdp-page">
      <FDPNavbar activePage="about" />
      
      {/* Header Section */}
      <section className="fdp-hero fdp-sub-hero">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fdp-hero-title">About Us</h1>
              <p className="fdp-hero-subtitle">
                Learn more about the Faculty Development Program on AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="fdp-section-title mb-4">About the Faculty Development Program</h2>
              
              <div className="mb-4">
                <h3 className="h4 mb-3">Program Overview</h3>
                <p className="fdp-description">
                  The Faculty Development Program (FDP) on AI is a comprehensive initiative designed to empower 
                  degree college teachers with the knowledge and skills necessary to integrate Artificial Intelligence 
                  into their teaching methodologies, research practices, and academic administration.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="h4 mb-3">Our Mission</h3>
                <p className="fdp-description">
                  To bridge the gap between traditional teaching methods and modern AI-driven educational technologies, 
                  ensuring that educators are well-equipped to prepare students for the digital age.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="h4 mb-3">Program Benefits</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Hands-on experience with AI tools and platforms
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Practical applications in various academic disciplines
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Collaborative learning environment with peer educators
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Certification upon successful completion
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Ongoing support and resources
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="h4 mb-3">Target Audience</h3>
                <p className="fdp-description">
                  This program is specifically designed for degree college faculty members, academic administrators, 
                  and educational researchers who are interested in incorporating AI technologies into their professional practice.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="h4 mb-3">Program Duration</h3>
                <p className="fdp-description">
                  The FDP is structured as an intensive program spanning multiple weeks with a combination of 
                  theoretical sessions, practical workshops, and hands-on projects.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FDPAbout;