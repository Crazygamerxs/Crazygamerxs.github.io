import React, { useState, useEffect } from 'react';
import images from '../../images/index'; // Adjust the path as needed
import './HomePage.css';

// List of skills
const skills = [
  'html', 'css', 'js', 'python', 'raspberry_pi', 'flask', 'django', 'C', 'cpp', 'godot', 
  'react', 'node', 'dart', 'flutter', 'aws', 'googlecloud', 'linux', 'bash', 'mysql', 'mongodb'
];

const SkillsContainer = () => {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const darkMode = document.body.classList.contains('dark-mode');
    setIsDarkMode(darkMode);
  }, []);

  return (
    <div className="social-game-container">
      <div className={`block-social-icons ${isDarkMode ? 'dark-mode' : ''}`}>
        {skills.map((skill, index) => {
          // Determine the correct icon based on dark mode
          const iconName = isDarkMode && images[`${skill}_darkmode`] ? `${skill}_darkmode` : skill;
          return (
            <img
              key={index}
              src={images[iconName]}
              alt={skill}
              className="skill-icon"
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsContainer;
