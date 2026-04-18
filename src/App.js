import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import ExperienceDetails from './pages/ExperienceDetails';
import { LanguageProvider } from './components/LanguageContext'; 

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:category/:index" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:id" element={<ExperienceDetails />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;