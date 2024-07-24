import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="block profile">
        personal icon with name and who I am
      </div>
      <div className="block updates">
        Maybe the Menu can be here<br />Or Updates
      </div>
      <div className="block job-status">
        Job Status?
      </div>
      <div className="block projects">
        Projects
      </div>
      <div className="block fun-facts">
        Fun Facts About Me
      </div>
      <div className="block achievements">
        Achievements<br />Or Future Plans
      </div>
      <div className="block main-content">
        rolling Images of different pics (projects, random ones too)
      </div>
      <div className="block map">
        Map of Waterloo
      </div>
      <div className="block weather">
        Weather and Time in Waterloo?
      </div>
      <div className="block pic">
        Pic of me
      </div>
      <div className="block another-pic">
        Another Pic of me, or something else like pics from different countries, I have been to
      </div>
      <div className="block fun-fact">
        Random Fun Fact
      </div>
      <div className="block social-icons">
        Social Icons
      </div>
      <div className="block modes">
        Switching between different modes
      </div>
    </div>
  );
};

export default HomePage;
