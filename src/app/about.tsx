import { useState } from 'react';

import drSudarshan from '/images/dr-sudarshan2.png';
import meenakshi from '/images/meenakshi4.png';
import aditya from '/images/aditya.jpeg';
import shivani from '/images/shivani-aggarwal4.png';
import { Navbar } from "../components/navbar";

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className="about-page">
      <Navbar /> 
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="container py-6 mt-5">
          <div className="row align-items-center min-vh-60">
            <div className="col-lg-7">
              <h1 className="display-3 fw-bold text-dark mb-4">
                Redefining Education Through Innovation
              </h1>
              <p className="lead text-secondary mb-4">
                The Dhananjaya Lab for Education Design (DLED) at IIT Ropar is pioneering 
                transformative approaches to learning in the digital age.
              </p>
              <div className="d-flex gap-3">
                <a href="#team" className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(233, 103, 52)', borderColor: 'rgb(233, 103, 52)' }}>
                  Meet the Team
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-graphic position-relative p-5">
                <div className="floating-shape shape-1 bg-warning rounded-circle"></div>
                <div className="floating-shape shape-2 bg-info rounded-circle"></div>
                <div className="floating-shape shape-3 bg-danger rounded-circle"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="DLED Team" 
                  className="img-fluid rounded-4 shadow-lg position-relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-6 bg-light p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Our Story</h2>
              <p className="lead text-muted">
                From humble beginnings to becoming a hub of educational innovation
              </p>
            </div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content shadow-sm">
                <h3>2018</h3>
                <p>Founded as a small research initiative at IIT Ropar</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content shadow-sm">
                <h3>2019</h3>
                <p>First major grant received for learning technologies research</p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content shadow-sm">
                <h3>2020</h3>
                <p>Launched our first online learning platform prototype</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content shadow-sm">
                <h3>2022</h3>
                <p>Recognized as Center of Excellence in Education Design</p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content shadow-sm">
                <h3>2023</h3>
                <p>Expanded to full lab status with 15+ researchers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Tabs */}
      <section className="py-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="mission-tabs">
                <div className="tabs-header d-flex justify-content-center mt-3 mb-2">
                  <button 
                    className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                    onClick={() => setActiveTab('vision')}
                  >
                    <i className="fas fa-eye me-2"></i> Our Vision
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                    onClick={() => setActiveTab('mission')}
                  >
                    <i className="fas fa-bullseye me-2"></i> Our Mission
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'values' ? 'active' : ''}`}
                    onClick={() => setActiveTab('values')}
                  >
                    <i className="fas fa-heart me-2"></i> Core Values
                  </button>
                </div>
                
                <div className="tab-content p-5 rounded-4 shadow-sm">
                  {activeTab === 'vision' && (
                    <div className="vision-content">
                      <h3 className="fw-bold mb-4">Shaping the Future of Learning</h3>
                      <p className="lead">
                        We envision a world where education adapts to each learner's needs, 
                        leveraging technology to create personalized, accessible, and 
                        transformative learning experiences.
                      </p>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="d-flex mb-3">
                            <div className="flex-shrink-0 text-warning me-3">
                              <i className="fas fa-rocket fs-2"></i>
                            </div>
                            <div>
                              <h5 className="fw-bold">Innovation</h5>
                              <p className="text-muted">
                                Pioneering new approaches to teaching and learning
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex mb-3">
                            <div className="flex-shrink-0 text-warning me-3">
                              <i className="fas fa-globe fs-2"></i>
                            </div>
                            <div>
                              <h5 className="fw-bold">Global Impact</h5>
                              <p className="text-muted">
                                Creating solutions that scale across diverse contexts
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'mission' && (
                    <div className="mission-content">
                      <h3 className="fw-bold mb-4">Transforming Education Through Design</h3>
                      <p className="lead">
                        Our mission is to research, design, and implement educational 
                        innovations that make learning more effective, engaging, and 
                        accessible for all.
                      </p>
                      <ul className="list-unstyled row mt-4">
                        <li className="col-md-6 mb-3 d-flex">
                          <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                          <span>Develop evidence-based learning frameworks</span>
                        </li>
                        <li className="col-md-6 mb-3 d-flex">
                          <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                          <span>Create scalable educational technologies</span>
                        </li>
                        <li className="col-md-6 mb-3 d-flex">
                          <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                          <span>Train the next generation of education designers</span>
                        </li>
                        <li className="col-md-6 mb-3 d-flex">
                          <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                          <span>Bridge research and practice in education</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'values' && (
                    <div className="values-content">
                      <h3 className="fw-bold mb-4">What Guides Our Work</h3>
                      <div className="row g-4">
                        {[
                          { icon: 'users', title: 'Collaboration', desc: 'We believe in the power of diverse perspectives' },
                          { icon: 'lightbulb', title: 'Creativity', desc: 'Innovative solutions require thinking differently' },
                          { icon: 'shield-alt', title: 'Integrity', desc: 'Ethical research and transparent practices' },
                          { icon: 'graduation-cap', title: 'Excellence', desc: 'Striving for the highest standards in all we do' },
                          { icon: 'heart', title: 'Empathy', desc: 'Designing with learners at the center' },
                          { icon: 'balance-scale', title: 'Equity', desc: 'Creating accessible solutions for all' }
                        ].map((value, index) => (
                          <div key={index} className="col-md-4">
                            <div className="value-card p-3 h-100 rounded-3">
                              <i className={`fas fa-${value.icon} text-warning fs-3 mb-3`}></i>
                              <h5 className="fw-bold">{value.title}</h5>
                              <p className="text-muted mb-0">{value.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-6 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3 p-3">Meet Our Team</h2>
              <p className="lead text-muted">
                A diverse group of educators, researchers, and technologists <br></br> united by a passion for learning innovation
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {[
              { 
                name: 'Dr. Sudarshan Iyengar', 
                role: 'Principal Investigator', 
                bio: 'Education technology specialist with 15+ years experience',
                img: drSudarshan
              },
              { 
                name: 'Meenakshi V', 
                role: 'PhD Researcher', 
                bio: 'Cognitive science and learning design expert',
                img: meenakshi
              },
              { 
                name: 'Shivani Aggarwal ', 
                role: 'Junior Researcher',
                bio: 'Expert in data analytics and educational assessment', 
                img: shivani
              },
              {
                name:'Aditya BMV',
                role: 'Software Developer',
                bio: 'Full-stack developer with a focus on educational applications',
                img: aditya

              }
            ].map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="team-card shadow-sm rounded-4 overflow-hidden h-100">
                  <div className="team-img position-relative">
                    <img src={member.img} alt={member.name} className="img-fluid w-100" />
                    <div className="team-social">
                      <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#" className="text-white"><i className="fas fa-envelope"></i></a>
                      <a href="#" className="text-white"><i className="fas fa-user-graduate"></i></a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="fw-bold mb-1">{member.name}</h4>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-muted mb-0">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5 p-3">
            <a href="/team" className="btn btn-outline-warning fw-bold btn-lg px-4">
              View Full Team <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;