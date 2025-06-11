const Home = () => {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="jumbotron text-center bg-light p-5 rounded-3 shadow-sm">
        <h1 className="display-4 fw-bold mb-4">Redefining Education through Innovation</h1>
        <p className="lead fs-4">
          Innovating education for a better tomorrow through research, design, and collaboration.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a href="/about" className="btn btn-primary btn-lg px-4 py-2">
            Learn More
          </a>
          <a href="/contact" className="btn btn-outline-secondary btn-lg px-4 py-2">
            Contact Us
          </a>
        </div>
      </div>

      {/* Research Cards */}
      <div className="row mt-5 g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
            <div className="card-body text-center p-4">
              <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle mb-3 mx-auto">
                <i className="fas fa-flask fs-4"></i>
              </div>
              <h5 className="card-title fw-bold">Research Initiatives</h5>
              <p className="card-text text-muted">
                Pioneering research in learning sciences, educational technology, and curriculum design.
                Current projects include AI in education and adaptive learning systems.
              </p>
              <a href="/research" className="btn btn-outline-primary mt-2">
                Explore Research
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
            <div className="card-body text-center p-4">
              <div className="icon-lg bg-success bg-opacity-10 text-success rounded-circle mb-3 mx-auto">
                <i className="fas fa-users fs-4"></i>
              </div>
              <h5 className="card-title fw-bold">Our Team</h5>
              <p className="card-text text-muted">
                Multidisciplinary team of educators, designers, and technologists working to transform 
                learning experiences through evidence-based approaches.
              </p>
              <a href="/people" className="btn btn-outline-primary mt-2">
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
            <div className="card-body text-center p-4">
              <div className="icon-lg bg-info bg-opacity-10 text-info rounded-circle mb-3 mx-auto">
                <i className="fas fa-handshake fs-4"></i>
              </div>
              <h5 className="card-title fw-bold">Collaborate With Us</h5>
              <p className="card-text text-muted">
                Partner with academia, industry, and government to develop innovative educational 
                solutions. Explore funding and research collaboration opportunities.
              </p>
              <a href="/contact" className="btn btn-outline-primary mt-2">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section  */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="text-center mb-5 fw-bold">Our Mission</h2>
        </div>
        
        {/* Flip Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="mission-card">
            <div className="mission-card-inner">
              <div className="mission-card-front bg-primary text-white p-4 rounded-3 d-flex flex-column justify-content-center">
                <div className="icon-lg bg-white bg-opacity-20 rounded-circle mb-3 mx-auto">
                  <i className="fas fa-lightbulb fs-4"></i>
                </div>
                <h3 className="text-center fw-bold">Innovate</h3>
              </div>
              <div className="mission-card-back bg-light p-4 rounded-3 d-flex flex-column justify-content-center">
                <p className="text-center">
                  Develop cutting-edge educational frameworks and technologies that push boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Flip Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="mission-card">
            <div className="mission-card-inner">
              <div className="mission-card-front bg-success text-white p-4 rounded-3 d-flex flex-column justify-content-center">
                <div className="icon-lg bg-white bg-opacity-20 rounded-circle mb-3 mx-auto">
                  <i className="fas fa-handshake fs-4"></i>
                </div>
                <h3 className="text-center fw-bold">Collaborate</h3>
              </div>
              <div className="mission-card-back bg-light p-4 rounded-3 d-flex flex-column justify-content-center">
                <p className="text-center">
                  Partner with institutions and industry to create impactful educational solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Flip Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="mission-card">
            <div className="mission-card-inner">
              <div className="mission-card-front bg-info text-white p-4 rounded-3 d-flex flex-column justify-content-center">
                <div className="icon-lg bg-white bg-opacity-20 rounded-circle mb-3 mx-auto">
                  <i className="fas fa-graduation-cap fs-4"></i>
                </div>
                <h3 className="text-center fw-bold">Transform</h3>
              </div>
              <div className="mission-card-back bg-light p-4 rounded-3 d-flex flex-column justify-content-center">
                <p className="text-center">
                  Redefine learning experiences through evidence-based design and research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="mt-5">
        <h2 className="text-center mb-4 fw-bold">Latest Updates</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/cal.avif" className="card-img-top img-responsive" alt="Research" />
              <div className="card-body">
              <span className="badge bg-primary mb-2">Research</span>
              <h5 className="card-title fw-bold">Continuous Active Learning</h5>
              <p className="card-text text-muted">Our team is working on a project to revolutionise the Ed-Tech</p>
              <a href="/research" className="btn btn-link ps-0">Read More →</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/events.jpg" className="card-img-top" alt="Event" />
              <div className="card-body">
                <span className="badge bg-success mb-2">Event</span>
                <h5 className="card-title fw-bold">ACM Compute</h5>
                <p className="card-text text-muted">We're hosting a national research conference soon.</p>
                <a href="/events" className="btn btn-link ps-0">Learn More →</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/collaboration.jpg" className="card-img-top" alt="Collaboration" />
              <div className="card-body">
                <span className="badge bg-info mb-2">Partnership</span>
                <h5 className="card-title fw-bold">Industry Collaboration</h5>
                <p className="card-text text-muted">Announcing new partnership with leading ed-tech companies.</p>
                <a href="/partners" className="btn btn-link ps-0">Details →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;