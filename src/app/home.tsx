import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ResearchInitiatives } from "../components/ResearchInitiatives";
import { ResearchApproach } from "../components/ResearchApproach";
import { MeetTheMinds } from "../components/MeetTheMinds";
import { AboutDLED } from "../components/AboutDled";
import { ContactSection } from "../components/ContactSection";
import { FooterWrapper } from "../components/FooterFile";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ width: "100%" }}>
        <Header
          onLearnMore={() => {
            const element = document.getElementById('research-approach');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          onContact={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }}
        />
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