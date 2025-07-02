// import { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/team.css";
import logo from "../assets/dled-iit-clear.png"

function HomeButton() {
    return (
      <Link to="/">
      <img
      src= { logo }
      alt="Home"
      style={{ width: 280, height: 86, cursor: "pointer", marginLeft: "-15px", marginTop: "-5px" }}
      />
      </Link>
    );
  }

const Collaborations = () => {

  return (
      <div className="research-page">
        {/* Hero Section*/}
        <section className="hero-section text-white py-6" style={{
          background: 'linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 85%)'
        }}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <HomeButton/>
                <h1 className="display-4 text-black fw-bold mb-4 mt-4" style={{ marginLeft: '-4px' }}>Collaborations</h1>
                <p className="lead mb-4 fs-4 text-secondary">
                  Partnering with passionate individuals
                </p>
                <div className="d-flex gap-3">
                  <Link to="/">
                  <button className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(233, 103, 52)', borderColor: 'rgb(233, 103, 52)', marginRight: '-30px' }}>
                  View Collaborators
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
  );
};

export default Collaborations;