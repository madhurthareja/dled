import React from "react";
import "../styles/overlapgroupwrapper.css";

interface ResearchCardProps {
  title: string;
  description: string;
  timeline: string;
  focus: string;
  researchTeam: string[];
  keyOutcomes: string[];
  collaborators: string[];
  imageUrl: string;
  decorativeImage1: string;
  decorativeImage2: string;
  collaboratorLogos: string[];
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  description,
  timeline,
  focus,
  researchTeam,
  keyOutcomes,
  collaborators,
  imageUrl,
  decorativeImage1,
  decorativeImage2,
  collaboratorLogos,
}) => {
  return (
    <div className="research-card">
      <div className="card-content">
        <div className="card-image-container">
          <img className="main-image" src={imageUrl} alt={title} />
          <div className="timeline-focus">
            <div className="timeline-focus-bg"></div>
            <p className="timeline">
              <span className="bold">TIMELINE:&nbsp;&nbsp;</span>
              {timeline}
            </p>
            <p className="focus">
              <span className="bold">FOCUS: </span>
              {focus}
            </p>
          </div>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      <div className="card-details">
        <div className="research-team">
          <p className="detail-title bold">Research team</p>
          {researchTeam.map((member, index) => (
            <p key={index} className="detail-text">
              {member}
            </p>
          ))}
        </div>

        <div className="key-outcomes">
          <p className="detail-title bold">Key Outcomes</p>
          {keyOutcomes.map((outcome, index) => (
            <p key={index} className="detail-text">
              {outcome}
            </p>
          ))}
        </div>

        <div className="collaborators">
          <p className="detail-title bold">Collaborators</p>
          <div className="collaborator-list">
            {collaborators.map((collab, index) => (
              <p key={index} className="detail-text">
                {collab}
              </p>
            ))}
          </div>
          <div className="collaborator-logos">
            {collaboratorLogos.map((logo, index) => (
              <div key={index} className="logo-container">
                <img src={logo} alt={`Collaborator ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <img className="decorative-image-1" src={decorativeImage1} alt="" />
      <img className="decorative-image-2" src={decorativeImage2} alt="" />
    </div>
  );
};

export const ResearchInitiatives: React.FC = () => {
  const researchData = [
    {
      title: "Continuous Active Learning Platform",
      description:
        "Developing an AI-assisted Learning Management System that adapts in real-time to student performance and engagement levels, providing personalized learning pathways.",
      timeline: "2023-26",
      focus: "AI in Education",
      researchTeam: ["Dr. Sharma (PI)", "2 PhD Students", "3 Research Assistants"],
      keyOutcomes: [
        "Patent pending for adaptive algorithm",
        "Pilot testing in 5 schools"
      ],
      collaborators: ["Coursera", "IIT Bombay"],
      imageUrl: "https://c.animaapp.com/SP71lV0J/img/interior-of-a-modern-bright-classroom-or-office-2025-03-15-19-39@2x.png",
      decorativeImage1: "https://c.animaapp.com/SP71lV0J/img/subtract.svg",
      decorativeImage2: "https://c.animaapp.com/SP71lV0J/img/subtract-1.svg",
      collaboratorLogos: [
        "https://c.animaapp.com/SP71lV0J/img/image-4@2x.png",
        "https://c.animaapp.com/SP71lV0J/img/image-3@2x.png"
      ]
    },
    {
      title: "Automated Peer Evaluation System",
      description:
        "Creating a machine learning-based system that facilitates and enhances peer review processes in massive online courses with fairness and accuracy metrics.",
      timeline: "2024-25",
      focus: "Educational Assessment",
      researchTeam: ["Prof. Gupta (PI)", "1 Postdoc", "4 Graduate Students"],
      keyOutcomes: [
        "Framework published in IEEE TLT",
        "Integration with 3 MOOC platforms"
      ],
      collaborators: ["Microsoft Research", "NSF"],
      imageUrl: "https://c.animaapp.com/SP71lV0J/img/hexagons-with-businessmen-employees-are-connected-2025-03-18-18-@2x.png",
      decorativeImage1: "https://c.animaapp.com/SP71lV0J/img/subtract.svg",
      decorativeImage2: "https://c.animaapp.com/SP71lV0J/img/subtract-1.svg",
      collaboratorLogos: [
        "https://c.animaapp.com/SP71lV0J/img/image-8@2x.png",
        "https://c.animaapp.com/SP71lV0J/img/image-7@2x.png"
      ]
    },
    {
      title: "Computer Vision for Engagement Detection",
      description:
        "Using gaze detection and facial expression analysis to measure student engagement in digital learning environments with privacy-preserving techniques.",
      timeline: "2024-27",
      focus: "Computer Vision",
      researchTeam: ["Dr. Patel (PI)", "3 PhD Students"],
      keyOutcomes: [
        "90% accuracy in engagement prediction",
        "Real-time dashboard for instructors"
      ],
      collaborators: ["Ministry of Education", "Google EDU"],
      imageUrl: "https://c.animaapp.com/SP71lV0J/img/facial-recognition-technology-concept-as-woman-has-2024-10-19-06@2x.png",
      decorativeImage1: "https://c.animaapp.com/SP71lV0J/img/subtract.svg",
      decorativeImage2: "https://c.animaapp.com/SP71lV0J/img/subtract-1.svg",
      collaboratorLogos: [
        "https://c.animaapp.com/SP71lV0J/img/image-5@2x.png",
        "https://c.animaapp.com/SP71lV0J/img/image-6@2x.png"
      ]
    }
  ];

  return (
    <div className="research-initiatives-container">
      <h2 className="section-title">Check out our Research Initiatives</h2>
      
      <div className="research-cards-container">
        {researchData.map((research, index) => (
          <ResearchCard key={index} {...research} />
        ))}
      </div>
    </div>
  );
};