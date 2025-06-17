import { useState } from 'react';
import { FaFlask, FaChartLine, FaEye, FaUsers, FaRobot, FaCertificate } from 'react-icons/fa';

const Research = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const researchProjects = [
    {
      id: 1,
      title: 'Continuous Active Learning Platform',
      status: 'ongoing',
      description: 'Developing an AI-assisted Learning Management System that adapts in real-time to student performance and engagement levels, providing personalized learning pathways.',
      focusArea: 'AI in Education',
      team: ['Dr. Sharma (PI)', '2 PhD Students', '3 Research Assistants'],
      partners: ['Ministry of Education', 'Google EDU'],
      timeline: '2023-2026',
      outcomes: [
        'Patent pending for adaptive algorithm',
        'Pilot testing in 5 schools'
      ],
      icon: <FaRobot className="text-primary" size={32} />
    },
    {
      id: 2,
      title: 'Automated Peer Evaluation System',
      status: 'ongoing',
      description: 'Creating a machine learning-based system that facilitates and enhances peer review processes in massive online courses with fairness and accuracy metrics.',
      focusArea: 'Educational Assessment',
      team: ['Prof. Gupta (PI)', '1 Postdoc', '4 Graduate Students'],
      partners: ['Coursera', 'IIT Bombay'],
      timeline: '2024-2025',
      outcomes: [
        'Framework published in IEEE TLT',
        'Integration with 3 MOOC platforms'
      ],
      icon: <FaUsers className="text-success" size={32} />
    },
    {
      id: 3,
      title: 'Computer Vision for Engagement Detection',
      status: 'ongoing',
      description: 'Using gaze detection and facial expression analysis to measure student engagement in digital learning environments with privacy-preserving techniques.',
      focusArea: 'Computer Vision',
      team: ['Dr. Patel (PI)', '3 PhD Students'],
      partners: ['Microsoft Research', 'NSF'],
      timeline: '2024-2027',
      outcomes: [
        '90% accuracy in engagement prediction',
        'Real-time dashboard for instructors'
      ],
      icon: <FaEye className="text-danger" size={32} />
    },
    {
      id: 4,
      title: 'Blockchain for Credential Verification',
      status: 'completed',
      description: 'Developed a decentralized system for secure and tamper-proof academic credential verification using blockchain technology.',
      focusArea: 'Educational Technology',
      team: ['Prof. Kumar (PI)', '2 Research Engineers'],
      partners: ['Ethereum Foundation', 'UGC'],
      timeline: '2021-2023',
      outcomes: [
        'Implemented at 3 universities',
        'Reduced verification time by 80%'
      ],
      icon: <FaCertificate className="text-warning" size={32} />
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? researchProjects 
    : researchProjects.filter(project => project.status === activeFilter);

  return (
    <div className="research-page">
      {/* Hero Section*/}
      <section className="hero-section text-white py-6" style={{
        background: 'linear-gradient(135deg,rgb(241, 187, 87) 0%,rgb(253, 245, 234) 100%)'
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 text-black fw-bold mb-4" style={{ marginLeft: '-4px' }}>Research at DLED</h1>
              <p className="lead fs-4 mb-4 text-muted fw-normal">
                Pioneering the future of education through technology and innovation
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-light btn-lg px-4">
                  Collaborate With Us
                </button>
                <button className="btn btn-outline-light text-dark btn-lg px-4">
                  View Publications
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <img 
                src="../public/images/brain.png" 
                alt="Research Illustration" 
                className="img-fluid"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Research Initiatives</h2>
            <p className="lead text-muted max-w-800 mx-auto">
              Interdisciplinary projects at the intersection of education and cutting-edge technology
            </p>
            
            {/* Filter Buttons */}
            <div className="d-flex justify-content-center mb-4 flex-wrap">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn btn-${activeFilter === 'all' ? 'secondary' : 'outline-warning'}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All Projects
                </button>
                <button
                  type="button"
                  className={`btn btn-${activeFilter === 'ongoing' ? 'secondary' : 'outline-warning'}`}
                  onClick={() => setActiveFilter('ongoing')}
                >
                  Ongoing Research
                </button>
                <button
                  type="button"
                  className={`btn btn-${activeFilter === 'completed' ? 'secondary' : 'outline-warning'}`}
                  onClick={() => setActiveFilter('completed')}
                >
                  Completed Projects
                </button>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-6">
                <div className={`project-card card h-100 border-0 shadow-sm overflow-hidden transition-all hover-shadow-lg ${
                  project.status === 'ongoing' ? 'border-start border-4 border-primary-subtle' : 'border-start border-4 border-success-subtle text-dark'
                }`}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-light p-3 rounded-3">
                          {project.icon}
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start">
                          <h3 className="h4 card-title fw-bold mb-3" style={{ marginLeft: '-8px' }}>{project.title}</h3>
                          <span className={`badge ${
                            project.status === 'ongoing' ? 'bg-primary-subtle text-dark' : 'bg-success-subtle text-dark'
                          }`}>
                            {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                          </span>
                        </div>
                        
                        <p className="card-text mb-4" style={{ marginLeft: '-8px' }}>{project.description}</p>
                        
                        <div className="row g-3 mb-4">
                          <div className="col-md-6">
                            <h6 className="text-muted small mb-2">Focus Area</h6>
                            <p className="fw-bold">{project.focusArea}</p>
                          </div>
                          <div className="col-md-6">
                            <h6 className="text-muted small mb-2">Timeline</h6>
                            <p className="fw-bold">{project.timeline}</p>
                          </div>
                          <div className="col-md-6">
                            <h6 className="text-muted small mb-2">Research Team</h6>
                            <ul className="list-unstyled small">
                              {project.team.map((member, i) => (
                                <li key={i}>{member}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <h6 className="text-muted small mb-2">Key Outcomes</h6>
                            <ul className="small">
                              {project.outcomes.map((outcome, i) => (
                                <li key={i}>{outcome}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center border-top pt-3">
                          <div>
                            <h6 className="text-muted small mb-2">Collaborators</h6>
                            <p className="small fw-bold">{project.partners.join(', ')}</p>
                          </div>
                          <button className="btn btn-sm btn-outline-secondary" style={{ marginLeft: '8px' }}>
                            Learn More <i className="fas fa-arrow-right ms-1"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Research Approach</h2>
            <p className="lead text-muted max-w-800 mx-auto">
              Combining rigorous academic research with practical implementation
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-4 d-inline-flex mb-3">
                  <FaFlask size={32} />
                </div>
                <h4 className="h5 fw-bold mb-3">Interdisciplinary Teams</h4>
                <p className="text-muted">
                  Combining expertise from education, computer science, and cognitive psychology
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-success bg-opacity-10 text-success rounded-circle p-4 d-inline-flex mb-3">
                  <FaChartLine size={32} />
                </div>
                <h4 className="h5 fw-bold mb-3">Evidence-Based</h4>
                <p className="text-muted">
                  Rigorous experimental designs with quantitative and qualitative measures
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-info bg-opacity-10 text-info rounded-circle p-4 d-inline-flex mb-3">
                  <FaUsers size={32} />
                </div>
                <h4 className="h5 fw-bold mb-3">Real-World Impact</h4>
                <p className="text-muted">
                  Direct application in educational settings with measurable outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-dark text-white">
        <div className="container text-center py-4">
          <h2 className="display-6 fw-bold mb-4">Interested in our research?</h2>
          <p className="lead mb-4">We welcome collaborations with academia and industry</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light btn-lg px-4">
              Join as Researcher <i className="fas fa-user-graduate ms-2"></i>
            </button>
            <button className="btn btn-outline-light btn-lg px-4">
              Partner With Us <i className="fas fa-handshake ms-2"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;