import { Header } from "../components/Header";
import { Navbar } from "../components/navbar";
import { VibeStrip } from "../components/VibeStrip";
import { EventFlash } from "../components/EventFlash";
import { ResearchInitiatives } from "../components/ResearchInitiatives";
import { ResearchApproach } from "../components/ResearchApproach";
import { MeetTheMinds } from "../components/MeetTheMinds";
import { AboutDLED } from "../components/AboutDled";
import { ContactSection } from "../components/ContactSection";
import { FooterWrapper } from "../components/FooterFile";

const Home = () => {
  // Define the latest upcoming event
  const latestEvent = {
    id: 1,
    title: 'Guru Purnima [ViBe Launch]',
    date: 'July 10, 2025',
    time: '11:00 AM - 12:00 PM',
    location: 'Virtual Event',
    description: 'Launch of ViBe, a wave of revolutionary educational tools for teachers and students.',
    image: '/images/events/vibe.png',
    category: 'Product Launch',
    status: 'upcoming',
    speakers: ['Dr. Sudarshan Iyengar', 'DLED Research Team'],
    link: 'https://zoom.us/j/94299775769?pwd=c6VakDdjWeE8t97eGrORYWAgns9aPy.1'
  };

  return (
    <div>
      <Navbar />
      <VibeStrip />
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
      <EventFlash event={latestEvent} />
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