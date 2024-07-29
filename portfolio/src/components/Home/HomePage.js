import React from 'react';
import './HomePage.css';
import images from '../../images/index'; // Adjust the path as needed
import Carousel from './main_content';


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="first-column">
        <div className="block-profile">
          <div className="profile-1st-container">
            <div className="profile-icon">
              <img src={images.pic} alt="Profile Icon" />
            </div>
            <div className="profile-name">
              <h4>Muhammad Inshal Farid</h4>
              <h6>@Software Developer</h6>
              
            </div>
            
            <div className="profile-linkedin-icon">
              <img src={images.linkedinIcon} alt="Indeed Icon" />
            </div>
         </div>
         <div className="profile-2nd-container">
            <div className="Github-Icon">
              <img src={images.githubIcon} alt="Github Icon" />
            </div>
            <div className="resume-button">
              <button>Download Resume</button>
            </div>
         </div>
       </div>
        <div className="block-job-status">
          <div className="job-status">
            <h6>Currently</h6>
            <h4>Software Developer</h4>
            <h7>@Bend All Automotives</h7>
          </div>
          
        </div>
        <div className='projects-fun-container'>
          <div className="block-projects-fun">
            <div className="projects-funfacts-icon">
              <img src={images.ProjectsIcon} alt="Projects Icon" />
            </div>
          </div>
          <div className="block-projects-fun">
            <div className="projects-funfacts-icon">
              <img src={images.funFactsIcon} alt="Fun Facts Icon" />
            </div>
          </div>
        </div>
        <div className="block achievements">
          Random Fun Facts
        </div>
      </div>
      <div className="second-column">
        <div className="block-updates">
          <h5>
            <span>Currently working on Tuxania</span>
            <span style={{ marginTop: '-23px', marginLeft: '-20px' }}>Tuxania</span>
          </h5>
        </div>
        <div className="block main-content">
          <Carousel />
        </div>
        <div className="social-fun-container">
          <div className="block fun-fact">
          Random Fun Fact
          </div>
          <div className="block social-icons">
            Social Icons
          </div>
        </div>
      </div>
      <div className='third-column'>
        <div className="block map">
          Map of Waterloo
        </div>
        <div className="block weather">
          Weather and Time in Waterloo?
        </div>
        <div className='pics-container'>
          <div className="block pic">
            Pic of me
          </div>
          <div className="block another-pic">
            Another Pic of me, or something else like pics from different countries, I have been to
          </div>
        </div>
        <div className="block modes">
          Switching between different modes
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;