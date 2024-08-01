import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Common.css'; // Adjust the path as needed

import images from '../../images/index'; // Adjust the path as needed

const items = [
  { name: "Home", icon: images.home, path: "/" },
  { name: "Projects", icon: null, path: "/projects" },
  { name: "About Me", icon: null, path: "/aboutMe" },
  { name: "Game", icon: null, path: "/game" },
  { name: "Contact Me", icon: null, path: "#" } // Update path if needed
];

const TopBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [containerStyle, setContainerStyle] = useState({});

  const handleMouseEnter = (event, index) => {
    const itemRect = event.target.getBoundingClientRect();
    const parentRect = event.target.parentElement.getBoundingClientRect();

    setContainerStyle({
      width: itemRect.width,
      left: itemRect.left - parentRect.left,
    });

    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setContainerStyle({
      width: '100%',
      left: 0,
    });

    setHoveredItem(null);
  };

  return (
    <div className="top-bar">
      <div
        className="shrink-container"
        style={containerStyle}
      ></div>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="top-bar-item"
          onMouseEnter={(event) => handleMouseEnter(event, index)}
          onMouseLeave={handleMouseLeave}
        >
          {item.icon ? <img src={item.icon} alt={item.name} /> : item.name}
        </Link>
      ))}
    </div>
  );
};

export default TopBar;
