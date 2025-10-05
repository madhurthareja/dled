import { FDPNavbar } from '../components/FDPNavbar';
import '../styles/fdp.css';

const FDPFAQ = () => {
  return (
    <div className="fdp-page">
      <FDPNavbar activePage="faq" />
      
      {/* Header Section */}
      <section className="fdp-hero fdp-sub-hero">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fdp-hero-title">Frequently Asked Questions</h1>
              <p className="fdp-hero-subtitle">
                Find answers to common questions about the FDP program
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="accordion" id="fdpFAQ">
                
                {/* FAQ 1 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Who can apply for this FDP program?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      This program is designed for degree college faculty members, academic administrators, 
                      and educational researchers. Participants should have basic computer literacy and 
                      a willingness to explore AI technologies in education.
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What is the duration of the program?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      The FDP spans 7 weeks with a structured curriculum covering AI fundamentals, 
                      practical applications, pedagogical integration, and assessment. Sessions are 
                      conducted both online and in hybrid formats.
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Do I need prior experience with AI or programming?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      No prior AI or programming experience is required. The program is designed to start 
                      from fundamentals and gradually build expertise. However, basic computer skills 
                      and familiarity with educational technology tools will be helpful.
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      What are the technical requirements?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      Participants need a computer/laptop with stable internet connection, updated web browser, 
                      and basic software installation capabilities. Specific AI tools and platforms will be 
                      provided as part of the program resources.
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      Is there a certification upon completion?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      Yes, participants who successfully complete all program requirements, including assignments, 
                      projects, and assessments, will receive a certificate from VLED Lab, IIT Ropar, 
                      in collaboration with MMTTP.
                    </div>
                  </div>
                </div>

                {/* FAQ 6 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                      What is the program fee?
                    </button>
                  </h2>
                  <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      This FDP is funded by the Malaviya Mission Teacher Training Programme (MMTTP) 
                      and is provided free of cost to eligible participants. All learning materials, 
                      tools access, and certification are included.
                    </div>
                  </div>
                </div>

                {/* FAQ 7 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">
                      How do I apply for the program?
                    </button>
                  </h2>
                  <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      Click on the "Apply Now" button and fill out the registration form with your academic 
                      details, teaching experience, and motivation for joining the program. Applications 
                      are reviewed on a rolling basis with limited seats available.
                    </div>
                  </div>
                </div>

                {/* FAQ 8 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq8">
                      What support is available during the program?
                    </button>
                  </h2>
                  <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      Participants receive comprehensive support including dedicated mentors, peer learning groups, 
                      technical helpdesk, resource library access, and ongoing guidance from subject matter experts. 
                      Regular Q&A sessions and discussion forums are also available.
                    </div>
                  </div>
                </div>

                {/* FAQ 9 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq9">
                      Can I continue working while attending the program?
                    </button>
                  </h2>
                  <div id="faq9" className="accordion-collapse collapse" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      Yes, the program is designed to accommodate working professionals. Sessions are scheduled 
                      to minimize disruption to regular teaching duties, with flexible timing options and 
                      recorded sessions available for later review.
                    </div>
                  </div>
                </div>

                {/* FAQ 10 */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq10">
                      What happens after program completion?
                    </button>
                  </h2>
                  <div id="faq10" className="accordion-collapse collapse" data-bs-parent="#fdpFAQ">
                    <div className="accordion-body">
                      Graduates join an alumni network for continued learning and collaboration. We provide 
                      ongoing resources, updates on new AI developments in education, and opportunities 
                      to participate in follow-up workshops and research projects.
                    </div>
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

export default FDPFAQ;