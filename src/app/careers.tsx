import { Link } from "react-router-dom";

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

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Shape the Future of Education</h1>
              <p className="lead mb-4">
                Join DLED and contribute to innovative educational technologies through development and research.
              </p>
              {/*
              <a href="#openings" className="btn btn-light btn-lg me-2">
                View Openings
              </a>
              */}
              <Link to="/#contact">
              <button className="btn btn-outline-light btn-lg">
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
              <h2 className="display-5 fw-bold mb-3">Current Opportunities</h2>
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
                      <span className="badge bg-primary bg-opacity-10 text-primary">
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
                          <i className="fas fa-check-circle text-primary me-2"></i>
                          <small>{req}</small>
                        </li>
                      ))}
                    </ul>
                    <a href={opening.applyLink} className="btn btn-primary w-100">
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