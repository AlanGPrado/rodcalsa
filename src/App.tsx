import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/presentation/pages/Home";
import Contact from "./assets/presentation/pages/Contact";
import Projects from "./assets/presentation/pages/Projects";
import Property from "./assets/presentation/pages/Property";
import About from "./assets/presentation/pages/About";
import Services from "./assets/presentation/pages/Services";
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
