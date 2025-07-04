import React from 'react';
import '../styles/header.css';
import { TypedText } from './TypedText';

export const Header: React.FC<{ onLearnMore?: () => void; onContact?: () => void }> = ({
  onLearnMore,
  onContact,
}) => (
  <div className="content hero-flex">
    <div className="hero-text">
      <span className="subtitle">An IIT Ropar Initiative</span>
      <h1 className="title">
        <TypedText text="Redefining Education Through Innovation" />
      </h1>
      <p className="description">
        The Dhananjaya Lab for Education Design (DLED) at IIT Ropar is pioneering
        transformative approaches to learning in the digital age.
      </p>
      <div className="cta-buttons">
        <button className="btn-black" onClick={onLearnMore}>
          <span>Learn More</span>
        </button>
        <button className="btn-outline" onClick={onContact}>
          <span>Contact us</span>
        </button>
      </div>
    </div>
    <div className="image-group">
      <div className="overlap-image">
        <img
          className="highschool-img"
          src="https://images.unsplash.com/photo-1667835949495-78a1ea9ecd77?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pink shiny patterned AI sphere"
        />
      </div>
    </div>
  </div>
);