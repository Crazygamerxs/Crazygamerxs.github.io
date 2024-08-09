import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
    <div className={`home-page ${isDarkMode ? 'dark-mode' : ''}`}>
       <div className="first-column">
      <div className="block-profile">
        <div className="profile-1st-container">
          <div className="profile-icon">
            <img src={images.pic} alt="Profile Icon" />
          </div>
          <div className="profile-name">
            <h4>Muhammad Inshal Farid</h4>
            <h6>@Full Stack Developer</h6>
          </div>

          <div className="profile-linkedin-icon">
            <a href="https://www.linkedin.com/in/muhammad-inshal-farid-36386a27b/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer">
              <img src={images.linkedinIcon} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>
        <div className="profile-description">
          <p>A computer science student aspiring to be one of the greats. President of TechCollab Club, Cofounder of Conhacks.</p>
        </div>
        <div className="profile-2nd-container">
          <a href="https://github.com/Crazygamerxs" target="_blank" rel="noopener noreferrer" className="Github-Icon">
            <img src={images.githubIcon} alt="Github Icon" />
          </a>
          <div className="resume-button">
            <button onClick={() => window.open('path-to-resume.pdf', '_blank')}>Download Resume</button>
          </div>
        </div>
      </div>
      <div className="block-job-status">
        <div className="job-status">
          <h6>Previosuly</h6>
          <h4>Software Developer</h4>
          <h7>@Bend All Automotives</h7>
        </div>
      </div>
      <div className="projects-fun-container">
        <Link to="/projects" className="block-projects-fun">
          <div className="projects-funfacts-icon">
            <img src={images.ProjectsIcon} alt="Projects Icon" />
          </div>
          <h4>Projects</h4>
        </Link>
        <Link to="/aboutMe" className="block-projects-fun">
          <div className="projects-funfacts-icon">
            <img src={images.funFactsIcon} alt="Fun Facts Icon" />
          </div>
          <h4>About Me</h4>
        </Link>
      </div>
      <div className="block-achievements">
        <div className="achievements">
          <h4>Fun Fact:</h4>
          <p>{randomFact}</p>
        </div>
      </div>
    </div>
      <div className="second-column">
        <div className="block-updates">
          <h5>
            <span>Currently working on Tuxania</span>
            <span style={{ marginTop: '0px', marginLeft: '-20px', display: 'inline-block' }}>
              <a
                href="https://github.com/Crazygamerxs/Tuxania"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Tuxania
              </a>
            </span>
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
          Made with ❤️ by Muhammad Inshal Farid
            {/* <Link to="/game" className="btn-link">
              <button className="btn-12">Crack the Code</button>
            </Link> */}
        </div>
        </div>
        <div className='pics-container'>
          <div className="block-pic">
            <img src={images.kitty} alt="Me" />
          </div>
          
        </div>
          <ToggleModeButton toggleMode={toggleMode} isDarkMode={isDarkMode} />
      </div>
      
      
    </div>
  );
};

export default HomePage;