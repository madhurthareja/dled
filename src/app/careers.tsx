import { Link } from "react-router-dom";
import logo from "../assets/dled-iit-clear.png"

const Careers = () => {
  const openings = [
    {
      title: 'Full Stack Developer Intern (Virtual)',
      type: 'Internship',
      location: 'Remote',
      description:
        'Work on cutting-edge educational platforms. Gain experience in React, Node.js, and cloud technologies.',
      requirements: [
        'Proficiency in JavaScript, React, and Node.js',
        'Experience with REST APIs and databases',
        'Strong problem-solving skills',
      ],
      applyLink: '/contact?tab=join',
    },
    {
      title: 'Full Stack Developer Intern (Onsite)',
      type: 'Internship',
      location: 'IIT Ropar Campus',
      description:
        'Collaborate with our team onsite to develop scalable educational tools and platforms.',
      requirements: [
        'Proficiency in JavaScript, React, and Node.js',
        'Experience with version control (Git)',
        'Ability to work in a team environment',
      ],
      applyLink: '/contact?tab=join',
    },
    {
      title: 'Research Assistant (AI in Education)',
      type: 'Research',
      location: 'IIT Ropar Campus',
      description:
        'Assist in research projects focused on AI-driven personalized learning systems.',
      requirements: [
        'Background in AI/ML or related fields',
        'Experience with Python and machine learning libraries',
        'Strong analytical and research skills',
      ],
      applyLink: '/contact?tab=join',
    },
  ];

function HomeButton() {
    return (
      <Link to="/">
      <img
      src= { logo }
      alt="Home"
      style={{ width: 280, height: 86, cursor: "pointer", marginLeft: "-15px" }}
      />
      </Link>
    );
  }

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="hero-section text-white py-5" style={{ background: 'linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 85%)', marginTop: '-20px' }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <HomeButton/>
              <h1 className="display-4 text-black fw-bold mb-4 mt-4">Shape the Future of Education</h1>
              <p className="lead mb-4 fs-4 text-secondary">
                Join DLED and contribute to innovative educational technologies through development and research.
              </p>

              {/*
              <a href="#openings" className="btn btn-light btn-lg me-2">
                View Openings
              </a>
              */}

              <Link to="/#contact">
              <button className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(233, 103, 52)', borderColor: 'rgb(233, 103, 52)' }}>
              Contact Us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section id="openings" className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3">
                Current Opportunities
              </h2>
              <p className="lead text-muted">
                We're looking for passionate individuals to join our team
              </p>
            </div>
          </div>

          <div className="row g-4">
            {openings.map((opening, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="card-title fw-bold mb-0">{opening.title}</h5>
                      <span className="badge bg-primary-subtle bg-opacity-10 text-dark">
                        {opening.type}
                      </span>
                    </div>
                    <div className="d-flex align-items-center text-muted mb-3">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      <small>{opening.location}</small>
                    </div>
                    <p className="card-text mb-4">{opening.description}</p>
                    <h6 className="fw-bold mb-3">Requirements:</h6>
                    <ul className="list-unstyled mb-4">
                      {opening.requirements.map((req, i) => (
                        <li key={i} className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          <small>{req}</small>
                        </li>
                      ))}
                    </ul>
                    <a href={opening.applyLink} className="btn btn-warning text-dark w-100">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;