import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Projects from './components/Projects/Projects'; // Adjust the import path as needed
import AboutMeApp from './components/About_Me/aboutMe';
import Game from './components/Game/Game'; 

// start of the App.js
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode preference from localStorage
    const darkMode = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', newMode);
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} toggleMode={toggleMode} />} />
          <Route path="/projects" element={<Projects isDarkMode={isDarkMode} toggleMode={toggleMode} />} />
          <Route path="/aboutMe" element={<AboutMeApp isDarkMode={isDarkMode} toggleMode={toggleMode} />} />
          <Route path="/game" element={<Game isDarkMode={isDarkMode} toggleMode={toggleMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
