import { Header } from "../components/Header"; 
import { ResearchInitiatives } from "../components/ResearchInitiatives";
import { ResearchApproach } from "../components/ResearchApproach";
import { MeetTheMinds } from "../components/MeetTheMinds";
import { AboutDLED } from "../components/AboutDled";

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
  </div>
  );
};

export default Home;