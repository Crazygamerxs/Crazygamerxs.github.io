import React from 'react';
import './Projects.css';

function ProjectDetails({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={`project-details-container ${project ? 'active' : ''}`}>
      <div className="project-details-content">
        <div className="project-header">
          <button className="back-arrow" onClick={onClose}>←</button>
          <h2 className="project-title">{project.title}</h2>
        </div>
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
