import React, {useState, useEffect} from 'react';
import './HomePage.css';
import images from '../../images/index'; // Adjust the path as needed
import ControlledCarousel from './main_content';
import MapComponent from './map';
import facts from './facts.json'; // make sure the path is correct
import SkillsContainer from './skillscontainer';
import ToggleModeButton from './ToggleModeButton'; // Adjust the path as needed


const HomePage = () => {
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    const getRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * facts.length);
      return facts[randomIndex];
    };
    
    setRandomFact(getRandomFact());
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

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
              <h4>Projects</h4>
          </div>
          <div className="block-projects-fun">
            <div className="projects-funfacts-icon">
              <img src={images.funFactsIcon} alt="Fun Facts Icon" />
            </div>
            <h4>About Me</h4>
          </div>
        </div>
        <div className="block-achievements">
          <div className='achievements'>
            <h4>Fun Fact:</h4> 
            <p>{randomFact}</p>
          </div>
        </div>
      </div>
      <div className="second-column">
        <div className="block-updates">
          <h5>
            <span>Currently working on Tuxania</span>
            <span style={{ marginTop: '-23px', marginLeft: '-20px' }}>Tuxania</span>
          </h5>
        </div>
        <div className="block-main-content">
          <ControlledCarousel />
        </div>
        <div className="social-game-container">
          
          <div className="block social-icons">
          <SkillsContainer isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
      <div className='third-column'>
        <div className="block-map">
          <div className='map'>
            <MapComponent />
          </div>
        </div>
        <div className="block-game">
        <div className="block game">
          <button className="btn-12">Enjoy A Game</button>
          </div>
        </div>
        <div className='pics-container'>
          <div className="block-pic">
            <img src={images.kitty} alt="Me" />
          </div>
          {/* <div className="block-another-pic">
              image
            <div className="block-2nd-pic">
            </div>

          </div> */}
        </div>
          <ToggleModeButton toggleMode={toggleMode} isDarkMode={isDarkMode} />
        
      </div>
      
      
    </div>
  );
};

export default HomePage;