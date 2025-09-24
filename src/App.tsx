import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./presentation/pages/Home";
import Contact from "./presentation/pages/Contact";
import Projects from "./presentation/pages/Projects";
import Property from "./presentation/pages/Property";
import About from "./presentation/pages/About";
import Services from "./presentation/pages/Services";
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/Proyectos" element={<Projects />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/servicios" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
