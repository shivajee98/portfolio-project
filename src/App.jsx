// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header.jsx';
import Banner from './components/Banner.jsx'
import './index.css';

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
    <div>
      <Header />
      <button onClick={toggleDarkMode} className="toggle-button">
        {darkMode ? 'Switch 2 Light Mode' : 'Switch to Dark Mode'}
      </button>
      <Banner/>
    </div>
  );
};

export default App;
