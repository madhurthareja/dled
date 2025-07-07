const Footer = () => {
    return (
      <footer className="bg-white pt-5 pb-4 border-top" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
        <div className="container">
          <div className="row">
            {/* Brand Column */}
            <div className="col-lg-8 mb-4">
              <div className="pe-lg-5 me-lg-5">
                <h5 className="text-dark mb-3 fw-bold" style={{ fontSize: '1.25rem', letterSpacing: '0.5px' }}>
                  Dhananjaya Lab for Education Design
                </h5>
                <p className="text-muted mb-4" style={{ maxWidth: '400px', lineHeight: '1.6' }}>
                  Innovating education through research, design, and collaboration at IIT Ropar.
                </p>
                <div className="d-flex align-items-center">
                  <a 
                    href="https://linkedin.com/company/educationdesignlab" 
                    className="btn btn-sm btn-outline-primary rounded-pill me-3 d-flex align-items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin me-2"></i> Follow Us
                  </a>
                  <a 
                    href="mailto:dled@iitrpr.ac.in" 
                    className="btn btn-sm btn-outline-secondary rounded-pill d-flex align-items-center"
                  >
                    <i className="fas fa-envelope me-2"></i> Email Us
                  </a>
                </div>
              </div>
            </div>
  
            {/* Address Column (right-aligned) */}
            <div className="col-lg-4 mb-4 d-flex justify-content-lg-end">
              <div style={{ maxWidth: '220px' }}>
                <h6 className="text-uppercase text-dark mb-3 fw-bold small">Our Location</h6>
                <address className="text-muted not-italic" style={{ lineHeight: '1.8' }}>
                  <div className="d-flex mb-2">
                    <i className="fas fa-map-marker-alt mt-1 me-2 text-primary"></i>
                    <div>
                      <p className="mb-1 fw-semibold">DLED, Super Academic Block</p>
                      <p className="mb-0 small">Indian Institute of Technology Ropar</p>
                      <p className="mb-0 small">Rupnagar, Punjab 140001</p>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
  
          <div className="border-top pt-4 mt-3">
            <p className="text-center text-muted small mb-0">
              &copy; {new Date().getFullYear()} Dhananjaya Lab for Education Design. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;