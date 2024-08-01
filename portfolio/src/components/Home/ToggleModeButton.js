import React from 'react';
import images from '../../images/index'; // Adjust the path as needed
import './HomePage.css'; // Import the CSS file with your dark and light mode styles

const ToggleModeButton = ({ isDarkMode, toggleMode }) => {
  return (
    <div className="block-modes">
      <img 
        src={images.light_mode} 
        alt="Light Mode Icon" 
        className={`mode-icon ${isDarkMode ? '' : 'active'}`}
        onClick={toggleMode} // Trigger mode toggle on icon click
      />
      <div 
        className={`mode-toggle ${isDarkMode ? 'dark-mode' : 'light-mode'}`} 
        onClick={toggleMode} // Trigger mode toggle on button click
      >
        {/* Sliding button */}
      </div>
      <img 
        src={images.dark_mode} 
        alt="Dark Mode Icon" 
        className={`mode-icon ${isDarkMode ? 'active' : ''}`}
        onClick={toggleMode} // Trigger mode toggle on icon click
      />
    </div>
  );
};

export default ToggleModeButton;
