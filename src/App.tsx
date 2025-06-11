import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './app/home';
import Team from './app/team';
import Research from './app/research';
import Careers from './app/careers';
import Contact from './app/contact';
import Footer from './components/footer';
import Partners from './app/partners';
import Events from './app/events';
import About from './app/about';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/research" element={<Research />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
