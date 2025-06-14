import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/home';
import Team from './app/team';
import Research from './app/research';
import Careers from './app/careers';
import Contact from './app/contact';
import Partners from './app/partners';
import Events from './app/events';
import About from './app/about';
import { Blog } from './app/blog';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/research" element={<Research />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
