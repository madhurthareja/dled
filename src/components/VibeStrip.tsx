import React from 'react';
import { FaArrowRight, FaRocket } from 'react-icons/fa';
import '../styles/vibeStrip.css';

export const VibeStrip: React.FC = () => {
  return (
    <div className="vibe-strip">
      <div className="vibe-strip-content">
        <div className="vibe-strip-left">
          <FaRocket className="vibe-icon" />
          <span className="vibe-text">
            <strong>Introducing ViBe</strong> - Our flagship educational platform is now live!
          </span>
        </div>
        <a 
          href="https://vibe.vicharanashala.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="vibe-strip-button"
        >
          Try ViBe Now
          <FaArrowRight className="vibe-button-icon" />
        </a>
      </div>
    </div>
  );
};
