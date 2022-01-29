import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="links">
          <nav className="color-nav">
            <Link to="/" className="link">
              Home |
            </Link>{" "}
            <Link to="about" className="link">
              About |
            </Link>{" "}
            <Link to="projects" className="link">
              Projects |
            </Link>{" "}
            <Link to="contact" className="link">
              Contact
            </Link>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
