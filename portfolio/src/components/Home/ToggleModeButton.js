import React, { useEffect, useState } from 'react';
import images from '../../images/index'; // Adjust the path as needed
import './HomePage.css'; // Import the CSS file with your dark and light mode styles

const ToggleModeButton = ({ isDarkMode, toggleMode }) => {
  const [mode, setMode] = useState(isDarkMode);

  useEffect(() => {
    setMode(isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    toggleMode();
    setMode(prevMode => !prevMode);
  };

  return (
    <div className="block-modes">
      <img 
        src={images.light_mode} 
        alt="Light Mode Icon" 
        className={`mode-icon ${!mode ? 'active' : ''}`}
        onClick={handleToggle} 
      />
      <div 
        className={`mode-toggle ${mode ? 'dark-mode' : 'light-mode'}`} 
        onClick={handleToggle}
      >
        <div className={`slider ${mode ? 'slider-right' : 'slider-left'}`} />
      </div>
      <img 
        src={images.dark_mode} 
        alt="Dark Mode Icon" 
        className={`mode-icon ${mode ? 'active' : ''}`}
        onClick={handleToggle} 
      />
    </div>
  );
};

export default ToggleModeButton;
