import { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/team.css";
import drSudarshan from '/images/dr-sudarshan2.png';
import sakshi from '/images/sakshi-sharma2.jpg';
import meenakshi from '/images/meenakshi2.png';
import rohit from '/images/rohit-sharma.jpg';
import aditya from '/images/aditya2.jpeg';
import shivani from '/images/shivani-aggarwal2.png';
import rajan from '/images/rajan.png';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState<null | {
    id: number;
    name: string;
    role: string;
    department?: string; // makes department optional
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
      department: 'Computer Science',
      bio: 'A faculty member in the CSE Department at IIT Ropar, who currently serves as Director of Annam.AI- a major Center of Excellence in Artificial Intelligence at IIT Ropar. As a PhD graduate from IISc, he is known for his engaging approach to technical education, delivering over 400 science talks, conducting 120+ Faculty Development Programs, and creating online courses that have reached more than 900,000 students. His SWAYAM course, The Joy of Computing, consistently ranks first in enrollments. He leads the Minor in AI initiative, aiming to train one million students, and heads the Education Design Lab at IIT Ropar. Dr. Sudarshan also coordinates the Prime Minister Research Fellowship and PM SHRI programs, and is a founding faculty member of the IIT Madras BS Programme. He has graduated 10 PhD students, currently supervises five more, and focuses his research on AI for Social Good and Education Design. Beyond academia, he is a homeschooling father of two and an avid reader, committed to making education inspiring and accessible.',
      research: 'Adaptive learning systems, Educational data mining',
      img: drSudarshan,
      category: 'faculty'
    },
    {
      id: 2,
      name: 'Sakshi Sharma',
      role: 'PhD Researcher',
      department: 'Computer Science',
      bio: 'An educator and research scholar at DLED Lab, IIT Ropar. My work centers around education design, integrating technology and innovation to create impactful learning experiences.',
      research: 'DDD, ViBe, PES, Poll Automation, ',
      img: sakshi,
      category: 'students'
    },
    {
      id: 3,
      name: 'Meenakshi V',
      role: 'PhD Researcher',
      department: 'Computer Science',
      bio: 'A passionate educator and researcher in Education Design at the DLED Lab  with a research journey focused on crafting engaging learning experiences that dissolve the boundary between learning and assessment—envisioning guided learning that makes final exams obsolete. Part of Annam.AI’s AI Skill Development initiative, working to bridge academia and career aspirations.',
      research: 'ViBe/CAL, Poll Automation',
      img: meenakshi,
      category: 'students'
    },
    {
      id: 4,
      name: 'Rohit Sharma',
      role: 'PhD Researcher',
      department: 'Computer Science',
      bio: 'A research scholar focused on integrating artificial intelligence into education to enhance teaching and learning experiences. Through my research and development efforts, I strive to create impactful tools that promote meaningful and effective learning.',
      research: 'PES, Poll Automation',
      img: rohit,
      category: 'students'
    },
    {
      id: 5,
      name: 'Shivani Aggarwal',
      role: 'PhD Researcher',
      department: 'Computer Science',
      bio: 'Investigating the impact of AI tutors on student engagement and learning outcomes.',
      research: 'AI in education, Student engagement',
      img: shivani,
      category: 'students'
    },
    {
      id: 6,
      name: 'Aditya BMV',
      role: 'Software Developer',
      bio: 'Software engineer with a passion for creating user-friendly educational applications and tools.',
      research: 'ViBe/CAL',
      img: aditya,
      category: 'staff'
    },
    {
      id: 7,
      name: 'Rajan Gupta',
      role: 'Software Developer',
      bio: 'Weaving technology, education, and collaboration into transformative initiatives. Passionate about storytelling and upskilling, driving scalable impact for communities.',
      research: 'ViBe/CAL',
      img: rajan,
      category: 'staff'
    }
  ];

  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  function HomeButton() {
    return (
      <Link to="/">
      <img
      src="/images/home.png"
      alt="Home"
      style={{ width: 32, height: 32, cursor: "pointer" }}
      />
      </Link>
    );
  }

  return (
    <div className="people-page">
      {/* Hero Section */}
      <section className="hero-section text-white py-6" style ={{ background: 'linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 75%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" style = {{marginTop:'20px'}} >
              <HomeButton/>
              <h1 className="display-4 fw-bold text-dark mb-4 mt-3"> Our People</h1>
              <p className="lead mb-4 fs-4 text-secondary">
                Meet the brilliant minds behind Dhananjaya Lab's innovative research and educational designs
              </p>
              <a href="#team" className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(233, 103, 52)', borderColor: 'rgb(233, 103, 52)' }}>
                Explore the Team
              </a>
            </div>
            <div className="col-lg-6">
              {/*}
              <div className="people-illustration position-relative mt-4">
                <div className="floating-head floating-head-1 rounded-circle overflow-hidden shadow-lg"></div>
                <div className="floating-head floating-head-2 rounded-circle overflow-hidden shadow-lg"></div>
                <div className="floating-head floating-head-3 rounded-circle overflow-hidden shadow-lg"></div>
              </div>
              */}
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
                    <img src={member.img} alt={member.name} className="img-fluid w-50" />
                    
                    {/* Conditionally render department badge */}
                    {member.department && (
                      <div className="member-badge bg-primary-subtle text-dark fw-semibold px-3 py-1 rounded-pill position-absolute">
                        {member.department}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h4 className="fw-bold mb-1">{member.name}</h4>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-muted mb-0">{member.bio.substring(0, 100)}...</p>
                    
                    {/* Conditionally render research topics */}
                    {member.research && (
                      <div className="mt-3">
                        {member.research.split(', ').map((topic, i) => (
                          <span key={i} className="badge bg-primary-subtle text-dark me-2 mb-1">{topic}</span>
                        ))}
                      </div>
                    )}
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
                        <span key={i} className="badge bg-primary-subtle text-dark bg-opacity-10 me-1 mb-1">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    {/*
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
                    */}

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

                {/*
                <a href={`mailto:${selectedMember.name.split(' ')[0].toLowerCase()}@iitrpr.ac.in`} className="btn btn-primary">
                  Contact {selectedMember.name.split(' ')[0]}
                </a>
                */}

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
             <a href="/comingsoon" className="btn btn-outline-warning mb-4 fw-bold">
              View Full Alumni List <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Team;