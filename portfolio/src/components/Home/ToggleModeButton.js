import React, { useEffect, useState } from 'react';
import images from '../../images/index'; // Adjust the path as needed
import './HomePage.css'; // Import the CSS file with your dark and light mode styles

const ToggleModeButton = ({ isDarkMode, toggleMode }) => {
  const [mode, setMode] = useState(isDarkMode);

  useEffect(() => {
    setMode(isDarkMode); // Ensure the mode is set correctly when the component mounts or updates
  }, [isDarkMode]);

  return (
    <div className="block-modes">
      <img 
        src={images.light_mode} 
        alt="Light Mode Icon" 
        className={`mode-icon ${!mode ? 'active' : ''}`}
        onClick={toggleMode} // Trigger mode toggle on icon click
      />
      <div 
        className={`mode-toggle ${mode ? 'dark-mode' : 'light-mode'}`} 
        onClick={toggleMode} // Trigger mode toggle on button click
      >
        {/* Sliding button or indicator can be placed here */}
      </div>
      <img 
        src={images.dark_mode} 
        alt="Dark Mode Icon" 
        className={`mode-icon ${mode ? 'active' : ''}`}
        onClick={toggleMode} // Trigger mode toggle on icon click
      />
    </div>
  );
};

export default ToggleModeButton;
