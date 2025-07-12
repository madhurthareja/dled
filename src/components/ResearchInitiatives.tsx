import "../styles/researchInitiatives.css";
import { researchProjects } from '../app/research';
import React, { useState } from 'react';

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

const latestThreeProjects = researchProjects
  .slice()
  .sort((a, b) => b.id - a.id)
  .slice(0, 3);

const mapToResearchCardProps = (project: typeof researchProjects[0]): ResearchCardProps => ({
  title: project.title,
  description: project.description,
  timeline: project.timeline,
  focus: project.focusArea,
  researchTeam: project.team,
  keyOutcomes: project.outcomes,
  collaborators: project.partners || [],
  imageUrl: project.imageUrl || "https://via.placeholder.com/400x200?text=No+Image",
  collaboratorLogos: [],
});

const ResearchCardFlip: React.FC<ResearchCardProps> = ({
  title,
  description,
  timeline,
  focus,
  keyOutcomes,
  imageUrl
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Flip on hover (desktop)
  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  return (
    <div
      className={`flip-card${isFlipped ? " flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-label={`Research project card: ${title}`}
    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{
            backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.45),rgba(0,0,0,0.1)), url(${imageUrl})`
          }}
        >
          <div className="flip-front-content">
            <h3 className="flip-card-title">{title}</h3>
            <p className="flip-card-meta">{timeline} | {focus}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="flip-card-back-scroll">
            <p className="flip-card-back-desc">{description}</p>
            <p className="flip-card-back-title">Key Outcomes</p>
            {keyOutcomes && keyOutcomes.map((outcome, idx) => (
              <p key={idx} className="flip-card-back-outcome">{outcome}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const ResearchInitiatives: React.FC = () => (
  <div id="research-initiatives" className="research-initiatives-container">
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
    
    <section className="flip-cards-section">
      <div className="carousel-container">
        {latestThreeProjects.map((project, idx) => (
          <ResearchCardFlip key={idx} {...mapToResearchCardProps(project)} />
        ))}
      </div>
    </section>
  </div>
);

export default ResearchInitiatives;
