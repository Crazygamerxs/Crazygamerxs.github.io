import React from 'react';
import './HomePage.css';
import images from '../../images/index'; // Adjust the path as needed


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="first-column">
        <div className="block profile">
            {/* Profile icon */}
            <div className="profile-icon">
              <img src={images.pic} alt="Profile Icon" />
            </div>
            <div className="profile-name">Muhammad Inshal Farid</div>
         </div>
        <div className="block job-status">
          Job Status?
        </div>
        <div className='projects-fun-container'>
          <div className="block projects">
            Projects
          </div>
          <div className="block fun-facts">
            Fun Facts About Me
          </div>
        </div>
        <div className="block achievements">
          Achievements<br />Or Future Plans
        </div>
      </div>
      <div className="second-column">
        <div className="block updates">
          Maybe the Menu can be here<br />Or Updates
        </div>
        <div className="block main-content">
          rolling Images of different pics (projects, random ones too)
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
