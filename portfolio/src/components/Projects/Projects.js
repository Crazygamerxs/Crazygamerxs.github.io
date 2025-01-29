import React, { useState } from 'react';
import TopBar from '../Common/topBar';
import images from '../../images/index'; // Adjust the import path as needed
import './Projects.css'; 

const imageArray = [
  { 
    src: images.civfix, 
    title: "Civfix", 
    skills: ["Python", "Django", "JS", "Html/Bootstrap", "SQLite"],
    link: "https://github.com/Crazygamerxs/CivFix"
  },
  { 
    src: images.Camsentinel, 
    title: "CamSentinel", 
    skills: ["Python", "Flask", "Sqlite", "Opencv", "Raspberrypi"],
    link: "https://github.com/jerinpious/CSCN72030-Sec2-Group1"
  },
  { 
    src: images.tuxania, 
    title: "Tuxania", 
    skills: ["Ignition", "Html/Css", "JS", "Python", "Sql"],
    link: "https://github.com/Crazygamerxs/Tuxania"
  },
  { 
    src: images.dreamspace, 
    title: "Dreamspace", 
    skills: ["Python", "Flask", "Three.js", "ArCore", ""],
    link: "https://github.com/Crazygamerxs/DreamSpace-Interior-Design"
  },
  { 
    src: images.Penpal, 
    title: "PenPal", 
    skills: ["Node.js", "Html/Css", "C++", "Sql"],
    link: "https://github.com/Crazygamerxs/Community-Marketplace-for-College-Students"
  }
];

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + imageArray.length) % imageArray.length
    );
  };

  const progressWidth = (currentImageIndex + 1) / imageArray.length * 100;

  return (
    <div className="projects-page">
      <TopBar />
      <div className='Carousel-Container'>
        <div className="image-container">
          <div className={`side-image-container ${currentImageIndex === 0 ? 'scale-up' : 'scale-down'}`}>
            <img
              src={imageArray[(currentImageIndex - 1 + imageArray.length) % imageArray.length].src}
              alt="Previous"
              className="side-image"
            />
            <div className="skills-container">
              {imageArray[(currentImageIndex - 1 + imageArray.length) % imageArray.length].skills.map((skill, index) => (
                <div key={index} className="skill-box">{skill}</div>
              ))}
            </div>
          </div>
          <div className="main-image-container">
            <img
              src={imageArray[currentImageIndex].src}
              alt="Current"
              className="main-image"
            />
            {/* <img
              src={images.open_icon}
              alt="Open Icon"
              className="open-icon"
            /> */}
            <div className="skills-container">
              {imageArray[currentImageIndex].skills.map((skill, index) => (
                <div key={index} className="skill-box">{skill}</div>
              ))}
            </div>
          </div>
          <div className={`side-image-container ${currentImageIndex === imageArray.length - 1 ? 'scale-up' : 'scale-down'}`}>
            <img
              src={imageArray[(currentImageIndex + 1) % imageArray.length].src}
              alt="Next"
              className="side-image"
            />
            <div className="skills-container">
              {imageArray[(currentImageIndex + 1) % imageArray.length].skills.map((skill, index) => (
                <div key={index} className="skill-box">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="button-container">
          <button 
            className="navigation-button previous-button" 
            onClick={previousImage}
          >
            <img src={images.leftarrow} alt="Previous" />
            <span>Previous</span>
          </button>
          
          <div className="progress-container">
            <div 
              className="progress-line" 
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          
          <button 
            className="navigation-button next-button" 
            onClick={nextImage}
          >
            <span>Next</span>
            <img src={images.rightarrow} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
