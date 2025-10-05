import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/home';
import Team from './app/team';
import Research from './app/research';
import Careers from './app/careers';
import Contact from './app/contact';
import Partners from './app/partners';
import Events from './app/events';
import About from './app/about';
import FDP from './app/fdp';
// import { Blog } from './app/blog';
import ScrollToTop from './components/ScrollToTop';
import HashScroller from './components/HashScroller';
import './index.css';
import ComingSoon from './app/comingsoon';
import Collaborations from './app/collaborations';
import FDPAbout from './app/fdp-about';
import FDPConcept from './app/fdp-concept';
import FDPFAQ from './app/fdp-faq';
import FDPContact from './app/fdp-contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HashScroller />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/research" element={<Research />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/events" element={<Events />} />
        <Route path="/fdp" element={<FDP />} />
        <Route path="/fdp-about" element={<FDPAbout />} />
        <Route path="/fdp-concept" element={<FDPConcept />} />
        <Route path="/fdp-faq" element={<FDPFAQ />} />
        <Route path="/fdp-contact" element={<FDPContact />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/collaborations" element={<Collaborations />} />
      </Routes>
    </Router>
  );
}

export default App;
