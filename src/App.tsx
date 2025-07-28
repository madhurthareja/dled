import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/home";
import Team from "./app/team";
import Research from "./app/research";
import Careers from "./app/careers";
import Contact from "./app/contact";
import Partners from "./app/partners";
import Events from "./app/events";
import About from "./app/about";
// import { Blog } from './app/blog';
import ScrollToTop from "./components/ScrollToTop";
import HashScroller from "./components/HashScroller";
import "./index.css";
import ComingSoon from "./app/comingsoon";
import Collaborations from "./app/collaborations";
import { Navbar } from "./components/navbar";
import { FooterWrapper } from "./components/FooterFile";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HashScroller />
      <Navbar />
      <div style={{ paddingTop: "110px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/research" element={<Research />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/events" element={<Events />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/collaborations" element={<Collaborations />} />
        </Routes>
      </div>
      <FooterWrapper />
    </Router>
  );
}

export default App;
