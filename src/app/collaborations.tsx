// import { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/collaborations.css";
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
                  Partnering with passionate individuals
                </p>
                {/* <div className="d-flex gap-3">
                  <Link to="/">
                  <button className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(228, 47, 23)', borderColor: 'rgb(228, 47, 23)', marginRight: '-30px' }}>
                  View Collaborators
                  </button>
                  </Link>
                </div> */}

                <div className="d-flex gap-3">
                <Link to="https://dled.iitrpr.ac.in/fdp/">
                  <button className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(248, 122, 38)', borderColor: 'rgb(248, 122, 38)', marginRight: '-30px' }}>
                  Learn More
                  </button>
                </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="container-fluid ml-10 mr-10">
          <div className="text-center mb-5">

          <div className="colored-info-block block-purple my-5">
          <h2>Faculty Development Program: <br></br> Unlock the Power of AI in Education</h2>
          <p>
            Our Faculty Development Program (FDP) is a dynamic, hands-on journey into the world of Artificial Intelligence. This program is for teachers of degree colleges who wish to enhance their AI literacy and explore the role of AI in education and research.
          </p>
          </div>

          <div className="colored-info-block block-blue my-5">
          <h2>Explore AI with Our Free FDP</h2>
          <p>
            Our free Faculty Development Program (FDP) is sponsored by the Madan Mohan Malviya Mission for Teacher Training (MMTTP). Participants will receive an e-certificate upon successful completion of the program.
          </p>
          </div>

          <div className="colored-info-block block-pink my-5">
          <h2>Program Highlights</h2>
          <p>
            This program empowers educators with essential AI concepts, practical skills, and innovative strategies to seamlessly integrate AI into classrooms, research, and academic administration.
          </p>
          </div>

          </div>
          </div>
        </section>

        </div>
  );
};

export default Collaborations;