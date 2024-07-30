import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './HomePage.css'; // Import your custom CSS

const MapComponent = () => {
  const position = [43.4643, -80.5204]; // Coordinates for Waterloo

  return (
    <div className='map-component'>
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='' // Remove attribution directly here
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
