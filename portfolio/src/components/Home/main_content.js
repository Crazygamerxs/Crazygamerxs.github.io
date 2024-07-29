import React, { useState } from 'react';
import './HomePage.css'; // Import your CSS file if needed
import images from '../../images/index'; // Adjust the path as needed

// Use images directly from the imported object
const imageArray = [images.ice_bear, images.nature, images.kitty];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {imageArray.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
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
  );
}

export default Carousel;
