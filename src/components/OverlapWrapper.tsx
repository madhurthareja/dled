import React from "react";
import "../styles/overlapwrapper.css";

export const ResearchApproach: React.FC = () => {
  return (
    <div className="research-approach-container">
      <div className="content-section">
        <h2 className="research-title">
          <span className="title-line-1">Our Research Approach</span>
          <span className="title-line-2">Combining rigorous academic research with practical implementation</span>
        </h2>
        
        <p className="research-description">
          At DLED Lab, we blend rigorous academic research with real-world implementation to create impactful, practical solutions.
        </p>
        
        <button className="about-button">
          <span className="button-text">About Us</span>
        </button>
      </div>
      
      <div className="cards-section">
        {/* Interdisciplinary Teams Card */}
        <div className="approach-card card-rotate-left">
          <div className="card-icon">
            <img src="https://c.animaapp.com/SP71lV0J/img/teamwork@2x.png" alt="Teamwork" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Interdisciplinary Teams</h3>
            <p className="card-description">
              Combining expertise from education, computer science, and cognitive psychology
            </p>
          </div>
        </div>
        
        {/* Evidence-Based Card */}
        <div className="approach-card">
          <div className="card-icon">
            <img src="https://c.animaapp.com/SP71lV0J/img/microscope@2x.png" alt="Microscope" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Evidence-Based</h3>
            <p className="card-description">
              Rigorous experimental designs with quantitative and qualitative measures
            </p>
          </div>
        </div>
        
        {/* Real-World Impact Card */}
        <div className="approach-card card-rotate-right">
          <div className="card-icon">
            <img src="https://c.animaapp.com/SP71lV0J/img/earth--1-@2x.png" alt="Earth" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Real-World Impact</h3>
            <p className="card-description">
              Direct application in educational settings with measurable outcomes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};