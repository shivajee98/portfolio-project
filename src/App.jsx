import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Banner from './components/Banner.jsx';
import Blogs from './components/Blogs.jsx';
import './index.css';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import lightMode from './assets/lightMode.png';
import darkModeIcon from './assets/darkMode.png';
import { useTheme } from './utils/ThemeContext.jsx';

const App = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Router>
      <div>
        <Header />
        <button onClick={toggleDarkMode} className="toggle-button">
          <img
            className='mode-icon'
            src={darkMode ? lightMode : darkModeIcon}
            alt="Toggle dark mode"
          />
        </button>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/home" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
