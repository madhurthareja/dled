import '../styles/fdp.css';
import { useState } from 'react';
import { FDPNavbar } from '../components/FDPNavbar';

const FDP = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    data?: any;
    message?: string;
  }>({ status: 'idle' });

  const handleCertificateVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;

    setVerificationResult({ status: 'loading' });

    try {
      // Replace this URL with your actual PHP API endpoint
      const response = await fetch('/api/verify-certificate.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ certificate_id: certificateId }),
      });

      const data = await response.json();

      if (response.ok) {
        setVerificationResult({
          status: 'success',
          data: data,
          message: 'Certificate verified successfully!'
        });
      } else {
        setVerificationResult({
          status: 'error',
          message: data.message || 'Certificate verification failed.'
        });
      }
    } catch (error) {
      setVerificationResult({
        status: 'error',
        message: 'Error connecting to verification service. Please try again.'
      });
    }
  };
  return (
    <div className="fdp-page">
      <FDPNavbar activePage="home" />

      {/* Hero Section */}
      <section className="fdp-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="fdp-hero-title">
                Faculty Development Program on AI
              </h1>
              <p className="fdp-hero-subtitle">
                Empowering Degree College Teachers to integrate AI into Teaching, Research, and Academic Administration.
              </p>
              <button className="btn fdp-register-btn">
                REGISTER NOW
              </button>
            </div>
            <div className="col-lg-6">
              {/* Background geometric shapes handled by CSS */}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="fdp-objectives py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fdp-section-title">Objectives of FDP</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-4">
              <p className="fdp-description">
                This <strong>Faculty Development Program (FDP)</strong> is designed to equip educators with foundational AI knowledge, practical applications, and pedagogical strategies to integrate AI into teaching, research, and academic administration.
              </p>
              <p className="fdp-description">
                We are excited to share that two enriching Faculty Development Programs (FDPs) are currently underway, offering educators opportunities to upskill and reimagine teaching practices.
              </p>
            </div>
          </div>

          {/* Current FDPs */}
          <div className="row mt-5">
            <div className="col-12 text-center mb-4">
              <h3 className="fdp-subsection-title">Currently Running FDPs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="fdp-program-item">
                <strong>CBPAI FDP</strong> – Transforming teaching with interactive and data-driven learning (AI fundamentals, applications, pedagogy).
              </p>
              <p className="fdp-program-item">
                <strong>Gurusetu FDP (Pilot)</strong> – Exploring generic thematic pillars for innovative teaching practices.
              </p>
              <p className="fdp-highlight">
                *Participants can enroll in either one or both FDPs. Start When You Want, Finish Before the Deadline!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="fdp-features py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="fdp-section-title">Faculty Development Program on AI</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h4 className="fdp-feature-title">Practical Application of AI in Education</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon brain-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h4 className="fdp-feature-title">Mastery of AI-Driven Pedagogical Strategies</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon hand-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h4 className="fdp-feature-title">Empowerment through Hands-On AI Experience</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon people-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4 className="fdp-feature-title">Cultivation of a Collaborative Network of AI-Enabled Educators</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="fdp-cta-buttons py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <button className="btn fdp-cta-btn concept-btn w-100">Concept Note</button>
            </div>
            <div className="col-lg-4 mb-3">
              <button className="btn fdp-cta-btn faq-btn w-100">FAQ</button>
            </div>
            <div className="col-lg-4 mb-3">
              <a href="https://mmc.ugc.ac.in/registration/Index" target="_blank" rel="noopener noreferrer" className="btn fdp-cta-btn apply-btn w-100">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Call Section */}
      <section className="fdp-video-section py-5">
        <div className="fdp-video-overlay">
          <div className="container text-center">
            <h2 className="fdp-video-title">Don't wait, upgrade your skills the smarter way!</h2>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="fdp-application py-5">
        <div className="container text-center">
          <h3 className="fdp-app-title mb-4">How to Apply: Fill out the registration form linked below. Limited seats available, so apply soon!</h3>
          <a href="https://mmc.ugc.ac.in/registration/Index" target="_blank" rel="noopener noreferrer" className="btn fdp-register-btn">Apply Now</a>
        </div>
      </section>

      {/* MMTTP Sponsor Section */}
      <section className="fdp-sponsor py-5">
        <div className="container text-center">
          <h2 className="fdp-sponsor-title">About MMTTP (Sponsor)</h2>
          <p className="fdp-sponsor-description">
            The <strong>Malaviya Mission Teacher Training Programme (MMTTP)</strong> aims to elevate educational standards by sponsoring and supporting innovative teacher training initiatives. This <strong>FDP on AI</strong> is funded by MMTTP to empower educators with cutting-edge knowledge and skills.
          </p>
        </div>
      </section>

      {/* Certificate Verification Section */}
      <section className="fdp-verification py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fdp-section-title mb-4">Certificate Verification</h2>
              <p className="fdp-description mb-4">
                Verify the authenticity of FDP completion certificates issued by VLED Lab, IIT Ropar.
              </p>
              
              <form onSubmit={handleCertificateVerification} className="fdp-verification-form">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Certificate ID"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        required
                      />
                      <button 
                        className="btn btn-primary px-4" 
                        type="submit"
                        disabled={verificationResult.status === 'loading'}
                      >
                        {verificationResult.status === 'loading' ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Verifying...
                          </>
                        ) : (
                          'Verify Certificate'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {/* Verification Results */}
              {verificationResult.status === 'success' && verificationResult.data && (
                <div className="alert alert-success mt-4">
                  <h5 className="alert-heading">✅ Certificate Verified!</h5>
                  <div className="text-start">
                    <p><strong>Participant Name:</strong> {verificationResult.data.participant_name}</p>
                    <p><strong>Program:</strong> {verificationResult.data.program_name}</p>
                    <p><strong>Issue Date:</strong> {verificationResult.data.issue_date}</p>
                    <p><strong>Certificate ID:</strong> {verificationResult.data.certificate_id}</p>
                  </div>
                </div>
              )}

              {verificationResult.status === 'error' && (
                <div className="alert alert-danger mt-4">
                  <h5 className="alert-heading">❌ Verification Failed</h5>
                  <p>{verificationResult.message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fdp-footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="fdp-footer-logo">
                <h2 className="mb-3">FDP<span className="highlight">2025</span></h2>
                <p className="fdp-footer-subtitle">(FDP) Faculty Development Program on AI in Education</p>
              </div>
            </div>
            <div className="col-lg-3">
              <h5 className="fdp-footer-title">About Us</h5>
            </div>
            <div className="col-lg-3">
              <h5 className="fdp-footer-title">Main Focus of the FDP:</h5>
              <p className="fdp-footer-text">
                The main focus of the Faculty Development Program (FDP) is to bring together educators, researchers, and academic leaders to build AI literacy and explore the integration of Artificial Intelligence in teaching, research, and academic administration.
              </p>
            </div>
            <div className="col-lg-3">
              <h5 className="fdp-footer-title">Themes:</h5>
              <ul className="fdp-themes-list">
                <li>- AI Foundations in Education</li>
                <li>- Personalized Learning & Assessment with AI</li>
                <li>- AI-Driven Research and Data Analysis</li>
                <li>- Smart Academic Administration</li>
                <li>- Ethics & Responsible AI Use</li>
                <li>- Future Trends in AI for Education</li>
                <li>- Building AI-Enabled Educator Communities</li>
              </ul>
              
              <div className="fdp-contact-info mt-4">
                <h5 className="fdp-footer-title">Address</h5>
                <p><i className="fas fa-map-marker-alt me-2"></i>IIT Ropar, Rupnagar, Punjab, India (140001)</p>
                <p><i className="fas fa-phone me-2"></i>76268 - 14400</p>
                <p><i className="fas fa-envelope me-2"></i>mmttp.iitrpr.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FDP;