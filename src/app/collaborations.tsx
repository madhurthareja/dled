import "../styles/collab.css";
import dled from "../assets/dled-clear.png";

const collaborationData = [
  {
    id: 1,
    title: "MMTTP Faculty Development Program",
    subtitle:
      "A dynamic, hands-on journey into the world of Artificial Intelligence",
    description:
      "This free program is for teachers of degree colleges who wish to enhance their AI literacy and explore the role of AI in education and research.",
    type: "Educational Program",
    status: "Active",
    duration: "Ongoing",
    participants: "500+ Faculty Members",
    link: "https://dled.iitrpr.ac.in/fdp/",
    supportedBy: [
      { name: "IIT Ropar", logo: "/images/collaborations/iitrpr.png" },
      { name: "MMTTP", logo: "/images/collaborations/mmtts.jpeg" },
      { name: "Annam.ai", logo: "/images/collaborations/annam-logo.png" },
      { name: "DLED", logo: dled },
    ],
    outcomes: [
      "AI literacy enhancement for educators",
      "Practical AI implementation in curriculum",
      "Research collaboration opportunities",
    ],
  },
];

const CollaborationLogos = () => {
  const item = collaborationData[0]; // or loop if multiple

  return (
    <div className="d-flex gap-4 flex-wrap align-items-center my-4">
      {item.supportedBy.map((partner) => (
        <div
          key={partner.name}
          className="text-center bg-white shadow-sm p-3 rounded"
          style={{ minWidth: "120px" }}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="img-fluid"
            style={{ maxHeight: "90px", objectFit: "contain" }}
          />
          <div className="small text-muted mt-2 fw-medium">{partner.name}</div>
        </div>
      ))}
    </div>
  );
};

const Collaborations = () => {
  return (
    <div className="collab-page">
      {/* Hero Section*/}
      <section
        className="hero-section text-white py-5"
        style={{
          background:
            "linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 85%)",
        }}
      >
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1
                className="display-4 text-black fw-bold mb-4 mt-4"
                style={{ marginLeft: "-4px" }}
              >
                {" "}
                Our Collaborations
              </h1>
              <p className="lead mb-4 fs-4 text-secondary"></p>

              {/* <div className="d-flex gap-3">
                  <Link to="/">
                  <button className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(228, 47, 23)', borderColor: 'rgb(228, 47, 23)', marginRight: '-30px' }}>
                  View Collaborators
                  </button>
                  </Link>
                </div> */}

              <div className="d-flex gap-3"></div>
              <div
                className="lead text-secondary"
                style={{
                  width: "90vw",
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                <CollaborationLogos />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-5 bg-light">
        <div className="container-fluid px-4">
          <div className="text-center mb-5">
            {/* <h2 className="display-5 fw-bold mb-3">Our Partnerships</h2> */}
            <p className="lead text-muted max-w-800 mx-auto">
              Building bridges between academia, industry, and educational
              communities
            </p>
          </div>

          <div className="row g-4">
            {collaborationData.map((collaboration) => (
              <div key={collaboration.id} className="col-lg-6">
                <div className="collaboration-card card h-100 border-0 shadow-sm overflow-hidden">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span
                        className={`badge ${
                          collaboration.status === "Active"
                            ? "bg-success-subtle text-success"
                            : "bg-warning-subtle text-warning"
                        }`}
                      >
                        {collaboration.status}
                      </span>
                      <span className="badge bg-primary-subtle text-primary">
                        {collaboration.type}
                      </span>
                    </div>

                    <h3 className="h4 card-title fw-bold mb-2">
                      {collaboration.title}
                    </h3>
                    <p className="text-muted mb-3">{collaboration.subtitle}</p>
                    <p className="card-text mb-4">
                      {collaboration.description}
                    </p>

                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <h6 className="text-muted small mb-2">Duration</h6>
                        <p className="fw-bold small">
                          {collaboration.duration}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6 className="text-muted small mb-2">Participants</h6>
                        <p className="fw-bold small">
                          {collaboration.participants}
                        </p>
                      </div>
                    </div>

                    {/* Supported By Section with Logos */}
                    <div className="mb-4">
                      <h6 className="text-muted small mb-3">Supported By</h6>
                      <div className="d-flex flex-wrap gap-3 align-items-center">
                        {collaboration.supportedBy.map((supporter, index) => (
                          <div
                            key={index}
                            className="supporter-item d-flex flex-column align-items-center gap-2"
                          >
                            <div>
                              <img
                                src={supporter.logo}
                                alt={supporter.name}
                                className="supporter-logo"
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                            <div className="supporter-name small fw-medium">
                              {supporter.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Outcomes */}
                    <div className="mb-4">
                      <h6 className="text-muted small mb-2">Key Outcomes</h6>
                      <ul className="small list-unstyled">
                        {collaboration.outcomes.map((outcome, index) => (
                          <li key={index} className="mb-1">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-top pt-3">
                      <a
                        href={collaboration.link}
                        className="btn btn-outline-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More <i className="fas fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
