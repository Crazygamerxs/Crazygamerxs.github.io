import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Import your CSS file if needed
import images from '../../images/index'; // Adjust the path as needed

const imageArray = [images.ice_bear, images.nature, images.kitty];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right'); // default to right

  useEffect(() => {
    // Automatic transition every 7 seconds
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % imageArray.length;
      if (!isAnimating) {
        setNextIndex(newIndex);
      }
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    if (nextIndex !== null) {
      setIsAnimating(true);
      setDirection(nextIndex > currentIndex ? 'right' : 'left');
      const timer = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex(null);
        setIsAnimating(false);
      }, 1500); // Match this duration with the CSS transition time
      return () => clearTimeout(timer);
    }
  }, [nextIndex, currentIndex]);

  const handleDotClick = (index) => {
    if (index !== currentIndex && !isAnimating) {
      setNextIndex(index);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {imageArray.map((image, index) => {
          let className = 'carousel-image';
          if (index === currentIndex) {
            className += ' current';
          }
          if (index === nextIndex) {
            className += ' entering';
          }
          if (index === (nextIndex !== null ? currentIndex : null)) {
            className += ' exiting';
          }

          return (
            <div
              key={index}
              className={className}
              style={{ 
                backgroundImage: `url(${image})`, 
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                '--slide-in-start': direction === 'right' ? '100%' : '-100%',
                '--slide-out-end': direction === 'right' ? '-100%' : '100%',
              }}
            ></div>
          );
        })}
      </div>
      <div className="carousel-dots-container">
        <div className="carousel-dots">
          {imageArray.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
