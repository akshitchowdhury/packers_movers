import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapLeaflet.css'; // Create a separate CSS file for styling
import L from 'leaflet';

const MapLeaflet = () => {
  const fixedLocation = [12.972007138583947, 77.61923362320319]; // Fixed location coordinates
  const [userLocation, setUserLocation] = useState(null);
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    
  });
  const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

  useEffect(() => {
    // Get user's geolocation
    navigator.geolocation.getCurrentPosition(
      (geoLocation) => {
        const { latitude, longitude } = geoLocation.coords;
        setUserLocation({ lat: latitude, lng: longitude }); 
      },
      (error) => console.error('Error getting geolocation:', error),
      { enableHighAccuracy: true }
    );
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <MapContainer
      center={fixedLocation} // Set the center to the fixed location
      zoom={13}
      className="custom-map-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={fixedLocation} icon={redIcon}>
        <Popup>Fixed Location</Popup>
      </Marker>
      {userLocation && (
        <Marker position={userLocation} icon={blueIcon}>
          <Popup>You are Here</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapLeaflet;
