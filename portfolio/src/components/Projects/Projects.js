import React, { useState } from 'react';
import TopBar from '../Common/topBar';
import images from '../../images/index'; // Adjust the import path as needed
import ProjectDetails from './ProjectDetails'; // Import the component with the correct casing
import './Projects.css'; 

const imageArray = [
  { src: images.kitty, title: "Kitty Project", skills: ["React", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Node.js", "Express", "MongoDB"] },
  { src: images.ice_bear, title: "Ice Bear Project", skills: ["Node.js", "Express", "MongoDB"] },
  { src: images.nature, title: "Nature Project", skills: ["Python", "Django", "PostgreSQL"] },
  { src: images.nature2, title: "Nature Project", skills: ["Python", "Django", "PostgreSQL"] }
  // Add more images and skills as needed
];

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + imageArray.length) % imageArray.length
    );
  };

  const progressWidth = (currentImageIndex + 1) / imageArray.length * 100;

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-page">
      <TopBar />
      <div className='Carousel-Container'>
        <div className="image-container">
          <div className="side-image-container">
            <img
              src={imageArray[(currentImageIndex - 1 + imageArray.length) % imageArray.length].src}
              alt="Previous"
              className="side-image"
              onClick={() => handleImageClick(imageArray[(currentImageIndex - 1 + imageArray.length) % imageArray.length])}
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
              onClick={() => handleImageClick(imageArray[currentImageIndex])}
            />
            <div className="skills-container">
              {imageArray[currentImageIndex].skills.map((skill, index) => (
                <div key={index} className="skill-box">{skill}</div>
              ))}
            </div>
          </div>
          <div className="side-image-container">
            <img
              src={imageArray[(currentImageIndex + 1) % imageArray.length].src}
              alt="Next"
              className="side-image"
              onClick={() => handleImageClick(imageArray[(currentImageIndex + 1) % imageArray.length])}
            />
            <div className="skills-container">
              {imageArray[(currentImageIndex + 1) % imageArray.length].skills.map((skill, index) => (
                <div key={index} className="skill-box">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="previous-button" onClick={previousImage}>Back</button>
          <div className="line-container">
            <div className="line"></div>
            <div className="progress-line" style={{ width: `${progressWidth}%` }}></div>
          </div>
          <button className="next-button" onClick={nextImage}>Next</button>
        </div>
      </div>
      <ProjectDetails project={selectedProject} onClose={handleCloseDetails} />
    </div>
  );
}

export default Projects;
