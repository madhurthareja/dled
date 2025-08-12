import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/header.css';
import { TypedText } from './TypedText';
import { ImageCarousel } from './ImageCarousel';

const carouselImages = [
  {
    src: "", 
    alt: "Collaboration Video",
    title: "DLED Collaboration Showcase",
    description: "Watch our latest collaboration highlights",
    type: "video" as const,
    videoId: "58sR6ewu9FY" 
  },
  {src: "/images/lab/lab3.jpg",
    alt: "Lab Images",
    title: "Collaborative Learning",
    description: "A space designed for collaborative learning and innovation",
    type: "image" as const
  },
  {
    src: "/images/lab/lab4.jpg",
    alt: "Lab Images",
    title: "Work is Meditation",
    description: "A serene environment where work becomes a form of meditation",
    type: "image" as const
  },
  {
    src: "/images/events/1.jpg",
    alt: "MMTTP",
    title: "MMTTP sponsored CBPAI by IIT Ropar",
    description: "",
    type: "image" as const
  }, 
  // {
  //   src: "/images/events/7.png",
  //   alt: "MMTTP",
  //   title: "MMTTP sponsored CBPAI by IIT Ropar",
  //   description: "",
  //   type: "image" as const
  // }, 
  // {
  //   src: "/images/events/16.png",
  //   alt: "MMTTP",
  //   title: "MMTTP sponsored CBPAI by IIT Ropar",
  //   description: "",
  //   type: "image" as const
  // }
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