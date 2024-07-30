import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Ensure this CSS file exists for styling
import images from '../../images/index'; // Import the images object

const selectedImages = [
  images.flowers,
  images.butterfly,
  images.ice_bear,
  // Add other images you want to include
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(slideInterval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="image-slider">
      <div
        className="image-slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {selectedImages.map((image, index) => (
          <div className="image-slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
