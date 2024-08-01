import React from 'react';
import './Projects.css'; // Add styles for the sliding effect

function ProjectDetails({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-details-container">
      <button className="close-button" onClick={onClose}>×</button>
      <div className="project-details-content">
        <h2>{project.title}</h2>
        <img src={project.src} alt={project.title} className="project-details-image" />
        <div className="project-details-description">
          <h3>Skills:</h3>
          <ul>
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          {/* Add more project details here */}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
