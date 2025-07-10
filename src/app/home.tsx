import { Header } from "../components/Header";
import { Navbar } from "../components/navbar";
import { VibeStrip } from "../components/VibeStrip";
import { EventFlash } from "../components/EventFlash";
import ResearchInitiatives from "../components/ResearchInitiatives";
import { ResearchApproach } from "../components/ResearchApproach";
import { MeetTheMinds } from "../components/MeetTheMinds";
import { AboutDLED } from "../components/AboutDled";
import { ContactSection } from "../components/ContactSection";
import { FooterWrapper } from "../components/FooterFile";
import { useNavigate } from "react-router-dom";
import { getNextUpcomingEvent } from "../utils/eventUtils";

const Home = () => {
  const navigate = useNavigate();
  
  // Get the next upcoming event dynamically
  const nextUpcomingEvent = getNextUpcomingEvent();

  return (
    <div>
      <Navbar />
      <VibeStrip />
      <div style={{ width: "100%" }}>
        <Header
          onLearnMore={() => {
            navigate('/about');
          }}
          onContact={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>
      <EventFlash event={nextUpcomingEvent} />
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
