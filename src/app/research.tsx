import { useState } from 'react';
import { FaFlask, FaChartLine, FaRobot, FaUsers,  FaChartBar } from 'react-icons/fa'; // FaEye, FaRobot, FaCertificate, FaChartBar


// Export the array so it can be imported in ResearchInitiatives.tsx
export const researchProjects = [
    {
      id: 1,
      title: 'Dopamine Driving through Dashboard (DDD)',
      status: 'ongoing',
      description: 'The DDD project develops centralized, interactive dashboards to drive motivation and engagement among stakeholders in educational research and development. Built with the MERN stack, DDD visualizes project progress, participation, and analytics across multiple initiatives at DLED Lab, enabling data-informed decision-making.',
      focusArea: 'Educational Technology',
      team: ['Sakshi (Ph.D. Scholar, CSE, under Dr. Sudarshan Iyengar)'],
      partners: ['DLED Lab'],
      timeline: '2023-2025',
      outcomes: [
        'Modular dashboard system for live tracking of research and product initiatives',
        'Improved visibility into student/faculty engagement and contributions',
        'Scalable design supporting multiple datasets and real-time visualisation'
      ],
      imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaChartBar className="text-info" size={32} />
    }, 

    {
      id: 2,
      title: 'Peer Evaluation System (PES)',
      status: 'ongoing',
      description: 'The Peer Evaluation System (PES) is a scalable, web-based tool designed to streamline and enhance peer assessment workflows in educational settings. Developed with a focus on transparency, fairness, and feedback quality, PES supports structured evaluation in both individual and group activities, empowering instructors and learners through data-driven insights.',
      focusArea: 'Educational Technology',
      team: ['Rohit Sharma (Ph.D. Scholar, IIT Ropar, under Dr. Sudarshan Iyengar)'],
      partners: [],
      timeline: '2023-2025',
      outcomes: [
      'Customizable peer evaluation forms integrated with participation data',
      'Analytics dashboard for instructors to identify patterns, biases, and anomalies',
      'Integration-ready system for LMS platforms and classroom tools',
      'Support for both formative and summative peer assessments',
      'Poll automation'
      ],
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaUsers className="text-dark" size={32} />
    },

    {
    id: 3,
    title: 'Poll Automation',
    status: 'ongoing',
    description: 'The Poll Automation project is a real-time classroom intelligence system designed to enhance interactivity in live teaching sessions. By leveraging live audio transcripts, the web application listens to ongoing lectures, generates summaries, and automatically crafts contextual polls every five minutes (adjustable by the instructor). This fosters continuous engagement, checks comprehension, and provides instructors with live feedback loops.',
    focusArea: 'Educational Technology',
    team: [
    'Sakshi Sharma (Ph.D. Scholar, IIT Ropar, under Dr. Sudarshan Iyengar)',
    'Rohit Sharma (Ph.D. Scholar, IIT Ropar, under Dr. Sudarshan Iyengar)',
    'Meenakshi (Ph.D. Scholar, IIT Ropar, under Dr. Sudarshan Iyengar)'
    ],
    partners: ['Dopamine Driving through Dashboard (DDD)', 'Peer Evaluation System (PES)'],
    timeline: '2025-2025',
    outcomes: [
    'Real-time speech-to-text transcription system for live classes',
    'Automated, context-aware poll generation with instructor override features',
    'Seamless integration with dashboards (DDD) and feedback mechanisms (PES)',
    'Enhanced classroom interactivity and adaptive teaching support'
    ],
    imageUrl: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <FaRobot className="text-primary" size={32} />
    }
];



const Research = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const researchProjects = [

    {
      id: 1,
      title: 'Dopamine Driving through Dashboard (DDD)',
      status: 'ongoing',
      description: 'The DDD project develops centralized, interactive dashboards to drive motivation and engagement among stakeholders in educational research and development. Built with the MERN stack, DDD visualizes project progress, participation, and analytics across multiple initiatives at DLED Lab, enabling data-informed decision-making.',
      focusArea: 'Educational Technology',
      team: ['Sakshi (Ph.D. Scholar, CSE, under Dr. Sudarshan Iyengar)'],
      partners: ['DLED Lab'],
      timeline: '2023-2025',
      outcomes: [
        'Modular dashboard system for live tracking of research and product initiatives',
        'Improved visibility into student/faculty engagement and contributions',
        'Scalable design supporting multiple datasets and real-time visualisation'
      ],
      icon: <FaChartBar className="text-info" size={32} />
    }, 

    {
      id: 2,
      title: 'Peer Evaluation System (PES)',
      status: 'ongoing',
      description: 'The Peer Evaluation System (PES) is a scalable, web-based tool designed to streamline and enhance peer assessment workflows in educational settings. Developed with a focus on transparency, fairness, and feedback quality, PES supports structured evaluation in both individual and group activities, empowering instructors and learners through data-driven insights.',
      focusArea: 'Educational Technology',
      team: ['Rohit Sharma (Ph.D. Scholar, IIT Ropar, under Dr. Sudarshan Iyengar)'],
      partners: [],
      timeline: '2023-2025',
      outcomes: [
      'Customizable peer evaluation forms integrated with participation data',
      'Analytics dashboard for instructors to identify patterns, biases, and anomalies',
      'Integration-ready system for LMS platforms and classroom tools',
      'Support for both formative and summative peer assessments',
      'Poll automation'
      ],
      icon: <FaUsers className="text-dark" size={32} />
    },

    {
      id: 3,
      title: 'Poll Automation',
      status: 'ongoing',
      description: 'The Poll Automation project is a real-time classroom intelligence system designed to enhance interactivity in live teaching sessions. By leveraging live audio transcripts, the web application listens to ongoing lectures, generates summaries, and automatically crafts contextual polls every five minutes (adjustable by the instructor). This fosters continuous engagement, checks comprehension, and provides instructors with live feedback loops.',
      focusArea: 'Educational Technology',
      team: [
      'Sakshi Sharma (Ph.D. Scholar, IIT Ropar, under Dr. Sudarshan Iyengar)',
      'Rohit Sharma (Ph.D. Scholar, IIT Ropar, under Dr. Sudarshan Iyengar)',
      'Meenakshi (Ph.D. Scholar, IIT Ropar, under Dr. Sudarshan Iyengar)'
      ],
      partners: ['Dopamine Driving through Dashboard (DDD)', 'Peer Evaluation System (PES)'],
      timeline: 'Feb 2025 – Dec 2025',
      outcomes: [
      'Real-time speech-to-text transcription system for live classes',
      'Automated, context-aware poll generation with instructor override features',
      'Seamless integration with dashboards (DDD) and feedback mechanisms (PES)',
      'Enhanced classroom interactivity and adaptive teaching support'
      ],
      icon: <FaRobot className="text-primary" size={32} />
    }

  ];

  const filteredProjects = activeFilter === 'all' 
    ? researchProjects 
    : researchProjects.filter(project => project.status === activeFilter);

  return (
    <div className="research-page">
      {/* Hero Section*/}
      <section className="hero-section text-white py-6" style={{
        background: 'linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 85%)'
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 text-black fw-bold mb-4 mt-4" style={{ marginLeft: '-4px' }}>Research at DLED</h1>
              <p className="lead mb-4 fs-4 text-secondary">
                Pioneering the future of education through technology and innovation
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-light btn-lg px-4">
                  Collaborate With Us
                </button>
                <button className="btn btn-outline-light text-dark btn-lg px-4" style ={{ borderWidth: '3.5px' }}>
                  View Publications
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <img 
                src="../images/brain.png" 
                alt="Research Illustration" 
                className="img-fluid"
                style={{ maxWidth: "200px", height: "auto", marginTop: "-10px" }}
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
                  className={`btn fw-semibold btn-${activeFilter === 'all' ? 'secondary' : 'outline-warning'}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All Projects
                </button>
                <button
                  type="button"
                  className={`btn fw-semibold btn-${activeFilter === 'ongoing' ? 'secondary' : 'outline-warning'}`}
                  onClick={() => setActiveFilter('ongoing')}
                >
                  Ongoing Research
                </button>
                <button
                  type="button"
                  className={`btn fw-semibold btn-${activeFilter === 'completed' ? 'secondary' : 'outline-warning'}`}
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