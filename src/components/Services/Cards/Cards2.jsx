import React from 'react';
import pet from '../../../components/assets/services/pet.webp';
import bike from '../../assets/services/bike_transport.webp';
import car from '../../assets/services/car_transport.jpg';
import comm from '../../assets/services/comercial_shift.jpg';
import house from '../../assets/services/house_shift.jpg';
import intercity from '../../assets/services/intercity.jpg';
import international from '../../assets/services/international_shift.webp';
import local from '../../assets/services/local_shifting.webp';
import luggage from '../../assets/services/luggage.jpg';
import office from '../../assets/services/office_shift.jpg';
import truck from '../../assets/services/truck_rent.webp';
import warehouse from '../../assets/services/warehousing_storage.webp';

const card_data = [
  { image: pet, text: 'We at Care packers and movers provide you the best assistance in choosing the right and reliable pet relocation service provider.' },
  { image: bike, text: 'Care packers and movers have long expertise in bike transport. We are leaders with the potential to expand across India.' },
  { image: car, text: 'Care packers and movers makes transporting your car easy. Hassle-free pickup and delivery will deliver your car to your doorstep on time.' },
  { image: comm, text: 'Commercial moving services are a type of business that is often overlooked by those who need professional help with their office relocation.' },
  { image: house, text: 'Whether you rent or own your home, Care packers and movers make movement hassle-free.' },
  { image: intercity, text: 'We at Care packers and movers are committed to providing you the best-quality intercity shifting services at genuine and realistic rates.' },
  { image: international, text: 'We are providing packing and shipping services for relocating from Bangalore to several countries the world.' },
  { image: local, text: 'At Care packers and movers , we are committed to providing you the best quality local shifting services near you.' },
  { image: luggage, text: 'We at Care packers and movers have made an association with the top-notch luggage transport service providers in Bengaluru.' },
  { image: office, text: 'Assuming you are looking to relocate your office somewhere in India, at that point you can avail of our office relocation estimate services.' },
  { image: truck, text: 'We can help you to choose the right size moving truck for your shifting requirements in Bangalore at a very affordable price.' },
  { image: warehouse, text: 'storage unit is the place where you can keep the items safe and by the time you would be back you can get those items and could continue your living' },
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
