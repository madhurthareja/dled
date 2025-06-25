import { Header } from "../components/Header"; 
import { ResearchInitiatives } from "../components/ResearchInitiatives";
import { ResearchApproach } from "../components/ResearchApproach";
import { MeetTheMinds } from "../components/MeetTheMinds";
import { AboutDLED } from "../components/AboutDled";
import { ContactSection } from "../components/ContactSection";
import { FooterWrapper } from "../components/FooterFile";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

const Home = () => {
  return (
    <div >
      {/* Hero Section */}
      <div style={{ width: "100%" }}>
        <Header/>
      </div>
      <div>
        <ResearchInitiatives/>
      </div>
      <div>
        <ResearchApproach/>
      </div>
      <div>
        <MeetTheMinds/>
      </div>
      <div>
        <AboutDLED/>
      </div>
      <div>
        <ContactSection/>
      </div>
      <div>
        <FooterWrapper/>
      </div>
  </div>
  );
};
export default Home;