import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Banner from './components/Banner.jsx';
import Blogs from './components/Blogs.jsx';
import './index.css';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div>
        <Header />
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? 'Switch 2 Light Mode' : 'Switch 2 Dark Mode'}
        </button>
        <Routes>
          <Route path="/" element={<Banner />} /> 
          <Route path="/home" element={<Banner />} /> 
          <Route path="/about" element={<About />} /> {/* Route for Blogs.jsx */}
          <Route path="/skills" element={<Skills />} /> {/* Route for Blogs.jsx */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Route for Blogs.jsx */}
          <Route path="/contact" element={<Contact />} /> {/* Route for Blogs.jsx */}
          <Route path="/blogs" element={<Blogs />} /> {/* Route for Blogs.jsx */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
