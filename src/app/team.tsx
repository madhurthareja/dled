import { useState } from 'react';
import "../styles/team.css";

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState<null | {
    id: number;
    name: string;
    role: string;
    department: string;
    bio: string;
    research: string;
    img: string;
    category: string;
  }>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sudarshan Iyengar',
      role: 'Principal Investigator',
      department: 'Leadership',
      bio: 'Education technology specialist with 15+ years experience in learning design and cognitive science.',
      research: 'Adaptive learning systems, Educational data mining',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      category: 'faculty'
    },
    {
      id: 2,
      name: 'Sakshi Sharma',
      role: 'PhD Researcher',
      department: 'Cognitive Science',
      bio: 'Expert in human-computer interaction and learning analytics with a focus on personalized education.',
      research: 'Learning analytics, HCI for education',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80',
      category: 'students'
    },
    {
      id: 3,
      name: 'Meenakshi V',
      role: 'PhD Researcher',
      department: 'Education Design',
      bio: 'Full-stack developer specializing in educational technology platforms and scalable architectures.',
      research: 'EdTech infrastructure, Learning platforms',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80',
      category: 'students'
    },
    {
      id: 4,
      name: 'Aditya BMV',
      role: 'Software Developer',
      department: 'Software Engineering',
      bio: 'Software engineer with a passion for creating user-friendly educational applications and tools.',
      research: 'Software development, UX design',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      category: 'staff'
    },
    {
      id: 5,
      name: 'Shivani Aggarwal',
      role: 'Junior Research Fellow',
      department: 'Learning Sciences',
      bio: 'Investigating the impact of AI tutors on student engagement and learning outcomes.',
      research: 'AI in education, Student engagement',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80',
      category: 'students'
    },
    {
      id: 6,
      name: 'Ashu Kaushik',
      role: 'PhD Researcher',
      department: 'Educational Psychology',
      bio: 'Researching motivation and self-regulation in online learning environments.',
      research: 'Learning motivation, Self-regulation',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      category: 'students'
    }
  ];

  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  return (
    <div className="people-page">
      {/* Hero Section */}
      <section className="hero-section text-white py-6" style ={{ background: 'linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 75%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-dark mb-4 mt-5">Our People</h1>
              <p className="lead mb-4 fs-4 text-secondary">
                Meet the brilliant minds behind Dhananjaya Lab's innovative research and educational designs
              </p>
              <a href="#team" className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(233, 103, 52)', borderColor: 'rgb(233, 103, 52)' }}>
                Explore the Team
              </a>
            </div>
            <div className="col-lg-6">
              <div className="people-illustration position-relative mt-4">
                <div className="floating-head floating-head-1 rounded-circle overflow-hidden shadow-lg"></div>
                <div className="floating-head floating-head-2 rounded-circle overflow-hidden shadow-lg"></div>
                <div className="floating-head floating-head-3 rounded-circle overflow-hidden shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Filter */}
      <section id="team" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3">Meet the Team</h2>
              <p className="lead text-muted">
                A diverse collective of educators, researchers, and innovators
              </p>
            </div>
          </div>

          <div className="filter-buttons d-flex justify-content-center flex-wrap gap-3 mb-5">
            <button 
              className={`btn fw-semibold ${activeFilter === 'all' ? 'btn-secondary' : 'btn-outline-warning'}`}
              onClick={() => setActiveFilter('all')}
            >
              All Members
            </button>
            <button 
              className={`btn fw-semibold ${activeFilter === 'faculty' ? 'btn-secondary' : 'btn-outline-warning'}`}
              onClick={() => setActiveFilter('faculty')}
            >
              Faculty
            </button>
            <button 
              className={`btn fw-semibold ${activeFilter === 'staff' ? 'btn-secondary' : 'btn-outline-warning'}`}
              onClick={() => setActiveFilter('staff')}
            >
              Staff
            </button>
            <button 
              className={`btn fw-semibold ${activeFilter === 'students' ? 'btn-secondary' : 'btn-outline-warning'}`}
              onClick={() => setActiveFilter('students')}
            >
              Students
            </button>
          </div>

          {/* Team Grid */}
          <div className="row g-4">
            {filteredMembers.map(member => (
              <div key={member.id} className="col-lg-4 col-md-6">
                <div 
                  className="team-member-card shadow-sm rounded-4 overflow-hidden h-100 cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="team-member-img position-relative">
                    <img src={member.img} alt={member.name} className="img-fluid w-100" />
                    <div className="member-badge bg-primary-subtle text-dark fw-semibold px-3 py-1 rounded-pill position-absolute">
                      {member.department}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="fw-bold mb-1">{member.name}</h4>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-muted mb-0">{member.bio.substring(0, 100)}...</p>
                    <div className="mt-3">
                      {member.research.split(', ').map((topic, i) => (
                        <span key={i} className="badge bg-light text-dark me-1 mb-1">{topic}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4 overflow-hidden">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">{selectedMember.name}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  title="Close" 
                  onClick={() => setSelectedMember(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <img 
                      src={selectedMember.img} 
                      alt={selectedMember.name} 
                      className="img-fluid rounded-3 mb-3"
                    />
                    <div className="d-flex gap-2 justify-content-center mb-3">
                      <a href="#" className="btn btn-sm btn-outline-primary rounded-circle">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-outline-primary rounded-circle">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-outline-primary rounded-circle">
                        <i className="fas fa-file-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h6 className="text-primary mb-2">{selectedMember.role}</h6>
                    <p className="mb-4">{selectedMember.bio}</p>
                    
                    <h6 className="fw-bold mt-4">Research Interests</h6>
                    <div className="mb-4">
                      {selectedMember.research.split(', ').map((topic, i) => (
                        <span key={i} className="badge bg-primary bg-opacity-10 text-primary me-1 mb-1">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <h6 className="fw-bold">Recent Publications</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a href="#" className="text-decoration-none">
                          <i className="fas fa-file-pdf text-danger me-2"></i>
                          "Title of recent paper" (2023)
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#" className="text-decoration-none">
                          <i className="fas fa-file-pdf text-danger me-2"></i>
                          "Another important study" (2022)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setSelectedMember(null)}
                >
                  Close
                </button>
                <a href={`mailto:${selectedMember.name.split(' ')[0].toLowerCase()}@iitrpr.ac.in`} className="btn btn-primary">
                  Contact {selectedMember.name.split(' ')[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alumni Section */}
      <section className="py-6">
        <div className="container">
          <div className="row justify-content-center mb-2">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-1 mt-4">Alumni Network</h2>
              <p className="lead text-muted">
                Where our former members are making an impact
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                name: 'Sakiley Pranaydeep ',
                role: 'LLM Research Intern (IIT Madras)',
                period: '2024-2025'
              },
              {
                name: 'Neeraj Rajeev Shetkar',
                role: 'M.S in CS (University of Sydney)',
                period: '2024-2025'
              },
              {
                name: 'Akash Kumar',
                role: 'Full Stack Developer (Startup)',
                period: '2024-2025'
              }
            ].map((alum, index) => (
              <div key={index} className="col-md-4">
                <div className="alumni-card p-4 rounded-3 shadow-sm h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="alumni-avatar bg-primary bg-opacity-10 text-secondary rounded-circle me-3">
                      {alum.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">{alum.name}</h5>
                      <small className="text-muted">{alum.period}</small>
                    </div>
                  </div>
                  <p className="mb-0">{alum.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <a href="/alumni" className="btn btn-outline-warning mb-4 fw-semibold">
              View Full Alumni List <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;