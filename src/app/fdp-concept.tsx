import { FDPNavbar } from '../components/FDPNavbar';
import '../styles/fdp.css';

const FDPConceptNote = () => {
  return (
    <div className="fdp-page">
      <FDPNavbar activePage="concept" />
      
      {/* Header Section */}
      <section className="fdp-hero fdp-sub-hero">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fdp-hero-title">Concept Note</h1>
              <p className="fdp-hero-subtitle">
                Detailed program framework and learning objectives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Note Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="fdp-section-title mb-4">Program Concept & Framework</h2>
              
              <div className="mb-5">
                <h3 className="h4 mb-3">Introduction</h3>
                <p className="fdp-description">
                  The rapid advancement of Artificial Intelligence has transformed various sectors, including education. 
                  This Faculty Development Program (FDP) on AI is conceptualized to address the growing need for 
                  AI literacy among degree college educators and to facilitate the integration of AI technologies 
                  in higher education.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="h4 mb-3">Rationale</h3>
                <p className="fdp-description">
                  Educational institutions worldwide are recognizing the importance of AI in transforming teaching 
                  and learning experiences. However, there exists a significant gap between the potential of AI 
                  technologies and their actual implementation in higher education. This program aims to bridge 
                  this gap by empowering faculty members with necessary AI competencies.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="h4 mb-3">Learning Outcomes</h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded">
                      <h5>Technical Proficiency</h5>
                      <p className="mb-0">Understanding AI fundamentals, machine learning concepts, and practical tool usage.</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded">
                      <h5>Pedagogical Integration</h5>
                      <p className="mb-0">Strategies for incorporating AI tools in curriculum design and delivery.</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded">
                      <h5>Research Enhancement</h5>
                      <p className="mb-0">Leveraging AI for academic research, data analysis, and publication.</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded">
                      <h5>Administrative Efficiency</h5>
                      <p className="mb-0">Using AI for academic administration, student assessment, and institutional management.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <h3 className="h4 mb-3">Program Structure</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Phase</th>
                        <th>Duration</th>
                        <th>Focus Area</th>
                        <th>Methodology</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Foundation</td>
                        <td>Week 1-2</td>
                        <td>AI Fundamentals</td>
                        <td>Lectures, Demonstrations</td>
                      </tr>
                      <tr>
                        <td>Application</td>
                        <td>Week 3-4</td>
                        <td>Practical Tools</td>
                        <td>Hands-on Workshops</td>
                      </tr>
                      <tr>
                        <td>Integration</td>
                        <td>Week 5-6</td>
                        <td>Pedagogical Implementation</td>
                        <td>Project-based Learning</td>
                      </tr>
                      <tr>
                        <td>Assessment</td>
                        <td>Week 7</td>
                        <td>Evaluation & Certification</td>
                        <td>Portfolio Review</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-5">
                <h3 className="h4 mb-3">Key Topics Covered</h3>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <ul className="list-unstyled">
                      <li><i className="fas fa-arrow-right text-primary me-2"></i>Introduction to AI & ML</li>
                      <li><i className="fas fa-arrow-right text-primary me-2"></i>Natural Language Processing</li>
                      <li><i className="fas fa-arrow-right text-primary me-2"></i>Computer Vision Applications</li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-3">
                    <ul className="list-unstyled">
                      <li><i className="fas fa-arrow-right text-primary me-2"></i>AI-powered Learning Management</li>
                      <li><i className="fas fa-arrow-right text-primary me-2"></i>Automated Assessment Tools</li>
                      <li><i className="fas fa-arrow-right text-primary me-2"></i>Personalized Learning Paths</li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-3">
                    <ul className="list-unstyled">
                      <li><i className="fas fa-arrow-right text-primary me-2"></i>Ethics in AI Education</li>
                      <li><i className="fas fa-arrow-right text-primary me-2"></i>Data Privacy & Security</li>
                      <li><i className="fas fa-arrow-right text-primary me-2"></i>Future Trends in EdTech</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FDPConceptNote;