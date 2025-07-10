import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/header.css';
import { TypedText } from './TypedText';
import { ImageCarousel } from './ImageCarousel';

// Sample images for the carousel
const carouselImages = [
  {
    src: "/images/lab/lab1.jpeg",
    alt: "Lab Images",
    title: "Vicharanashala",
    description: "A place where the ideas are born and nurtured"
  },
  {
    src: "/images/lab/lab2.jpeg",
    alt: "Lab Images",
    title: "Innovation Garage",
    description: "A place where ideas are transformed into reality"
  },
  {src: "/images/lab/lab3.heic",
    alt: "Lab Images",
    title: "Collaborative Learning",
    description: "A space designed for collaborative learning and innovation"
  },
  {
    src: "/images/lab/lab4.heic",
    alt: "Lab Images",
    title: "Work is Meditation",
    description: "A serene environment where work becomes a form of meditation"
  }
];

export const Header: React.FC<{ onLearnMore?: () => void; onContact?: () => void }> = ({
  onLearnMore,
  onContact,
}) => (
  <div className="header">
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
        <ImageCarousel 
          images={carouselImages}
          autoSlide={true}
          slideInterval={6000}
          showArrows={true}
          height="400px"
        />
      </div>
    </div>
    <div
      className="scroll-indicator pointer-cursor"
      onClick={() => {
      const el = document.getElementById('research-initiatives');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      }}
    >
      <div className="scroll-text">Discover More</div>
      <FaChevronDown className="scroll-arrow" />
    </div>
  </div>
);