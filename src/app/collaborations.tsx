// import { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/collab.css";
import { Navbar } from "../components/navbar"; // Import Navbar


const Collaborations = () => {

  return (
      <div className="collab-page">
        <Navbar />
        {/* Hero Section*/}
        <section className="hero-section text-white py-5" style={{
          background: 'linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 85%)'
        }}>
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="display-4 text-black fw-bold mb-4 mt-4" style={{ marginLeft: '-4px' }}> Our Collaborations</h1>
                <p className="lead mb-4 fs-4 text-secondary">
                </p>
                
                {/* <div className="d-flex gap-3">
                  <Link to="/">
                  <button className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(228, 47, 23)', borderColor: 'rgb(228, 47, 23)', marginRight: '-30px' }}>
                  View Collaborators
                  </button>
                  </Link>
                </div> */}

                <div className="d-flex gap-3">
                </div>

              </div>
            </div>
          </div>
        </section>


      <div className="collab-block">
      <div className="collab-main-layout">
      <div className="collab-section">
        <h2 className="collab-details">
          <span className="collab-title display-4 fs-2 fw-bold mb-4 mt-4">
            Faculty Development Program
          </span>
          <span className="collab-subtitle">A dynamic, hands-on journey into the world of Artificial Intelligence</span>
        </h2>
        
        <div className="collab-description">
          This free program is for teachers of degree colleges who wish to enhance their AI literacy and explore the role of AI in education and research. 
        </div>
        
        <Link to="https://dled.iitrpr.ac.in/fdp/">
          <button className="btn btn-lg px-4 text-light info-button" style= {{ marginRight: '-30px' }}>
          Learn More
          </button>
        </Link>
      </div>
      </div>
      </div> 

      <div className="collab-block">
      <div className="collab-main-layout">
      <div className="collab-section">
        <h2 className="collab-details">
          <span className="collab-title display-4 fs-2 fw-bold mb-4 mt-4">
            Example
          </span>
          <span className="collab-subtitle">Brief description</span>
        </h2>
        
        <div className="collab-description">
          Detailed description
        </div>
        
        <Link to="">
          <button className="btn btn-lg px-4 text-light info-button" style= {{ marginRight: '-30px' }}>
          Learn More
          </button>
        </Link>
      </div>
      </div>
      </div> 

    </div>
  );
};

export default Collaborations;