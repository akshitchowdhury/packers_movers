import React from 'react';
import pet from '../../../components/assets/services/pet.webp';
import bike from '../../assets/services/bike_transport.webp';
import car from '../../assets/services/car_transport.jpg';
import comm from '../../assets/services/comercial_shift.jpg';
import house from '../../assets/services/house_shift.jpg';
import intercity from '../../assets/services/intercity_shift.jpg';
import international from '../../assets/services/international_shift.webp';
import local from '../../assets/services/local_shifting.webp';
import luggage from '../../assets/services/luggage_shift.jpg';

const card_data = [
  { image: pet, text: 'Description for pet' },
  { image: bike, text: 'Description for bike transport' },
  { image: car, text: 'Description for car transport' },
  { image: comm, text: 'Description for commercial shift' },
  { image: house, text: 'Description for house shift' },
  { image: intercity, text: 'Description for intercity shift' },
  { image: international, text: 'Description for international shift' },
  { image: local, text: 'Description for local shifting' },
  { image: luggage, text: 'Description for luggage shift' },
];

const cardStyle = {
  width: '23rem',
  height: '400px', // Adjust the overall card height as needed
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  overflow: 'hidden',
  margin: '12px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle box shadow
  paddingBottom: '1px',
};

const imageStyle = {
  flex: '1', // Let the image take the available space
  objectFit: 'cover', // Maintain aspect ratio and cover the space
  width: '100%', // Set a uniform width for the image
  height: '200px', // Set a uniform height for the image
};

const cardTextStyle = {
  padding: '1rem',
  marginBottom: '70px', // Adjust the top margin for the title
};

const Cards2 = () => {
  return (
    <>
      {card_data.map((card, index) => (
        <div key={index} style={cardStyle}>
          <img src={card.image} alt={`Card ${index + 1}`} style={imageStyle} />
          <div style={cardTextStyle}>
            <h5 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Card Title</h5>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards2;
