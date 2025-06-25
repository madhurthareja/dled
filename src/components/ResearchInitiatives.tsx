import "../styles/researchInitiatives.css";
import { researchProjects } from '../app/research';
import React from 'react';

interface ResearchCardProps {
  title: string;
  description: string;
  timeline: string;
  focus: string;
  researchTeam: string[];
  keyOutcomes: string[];
  collaborators: string[];
  imageUrl: string;
  collaboratorLogos: string[];
}

const title = "Check Out Our Research Initiatives";

// Utility function to extract end year from timeline string
const getEndYear = (timeline: string) => {
  // Handles formats like "2024-2026" or "2025"
  const parts = timeline.split('-');
  return parseInt(parts[1] || parts[0], 10);
};

const latestThreeProjects = researchProjects
  .slice() // Copy to avoid mutating the original
  .sort((a, b) => getEndYear(b.timeline) - getEndYear(a.timeline))
  .slice(0, 3);


const mapToResearchCardProps = (project: any): ResearchCardProps => ({
  title: project.title,
  description: project.description,
  timeline: project.timeline,
  focus: project.focusArea,
  researchTeam: project.team,
  keyOutcomes: project.outcomes,
  collaborators: project.partners,
  imageUrl: project.imageUrl || "https://via.placeholder.com/400x200?text=No+Image",
  collaboratorLogos: project.collaboratorLogos || [],
});


const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  description,
  timeline,
  focus,
  researchTeam,
  keyOutcomes,
  collaborators,
  imageUrl,
  collaboratorLogos,
}) => {
  return (
    <div className="research-card">
      <div className="card-content">
        <div className="card-image-container">
          <img className="main-image" style = {{ opacity: 0.9 }} src={imageUrl} alt={title} />
          <div className="timeline-focus">
            <div className="timeline-focus-bg"></div>
            <p className="timeline" style = {{ fontFamily: 'monospace, sans serif' }}>
              <span className="bold">TIMELINE:&nbsp;&nbsp;</span>
              {timeline}
            </p>
            <p className="focus" style = {{ fontFamily: 'monospace, sans serif' }}>
              <span className="bold">FOCUS: </span>
              {focus}
            </p>
          </div>
        </div>
        <h3 className="card-title" style = {{ color: "#0c5ca7" }}>{title}</h3>
        <p className="card-description detail-text" style={{ marginTop: '20px', marginBottom : '25px', fontWeight: "normal" , fontFamily : "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" , fontSize: "20px", opacity: "0.7" }}>{description}</p>
      </div>

      <div className="card-details">
        <div className="research-team">
          <p className="detail-title bold">Research Team</p>
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
    </div>
  );
};

export const ResearchInitiatives: React.FC = () => {

  return (
    <div className="research-initiatives-container">
      <h2 className="section-title">
      {title.split(" ").map((word, wordIdx, arr) => (
        <React.Fragment key={wordIdx}>
          <span className="word" style={{ whiteSpace: "pre" }}>
            {word.split("").map((char, i) => (
              <span key={i} className="letter">{char}</span>
            ))}
          </span>
          {/* Add space after each word except the last */}
          {wordIdx !== arr.length - 1 && " "}
          {/* Insert a line break after "Our" */}
          {word === "Our" && <br />}
        </React.Fragment>
      ))}
    </h2>
      

      <div className="section-description" style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button className="visit-research-btn" style= {{ marginTop: '-25px', marginBottom: '25px' }} onClick={() => window.location.href = "/research"}>
        <span className="btn-text">Explore Our Research</span>
      </button>
      </div>

      <div className="research-cards-container">
      {latestThreeProjects.map((project, index) => (
        <ResearchCard key={index} {...mapToResearchCardProps(project)} />
      ))}
      </div>
    </div>
  );
};