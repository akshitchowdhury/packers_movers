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

import './Cards2.css'

const card_data = [
  { title: "Pet Relocation",image: pet, text: 'We at Care packers and movers provide you the best assistance in choosing the right and reliable pet relocation service provider.' },
  { title: "Bike transportation",image: bike, text: 'Care packers and movers have long expertise in bike transport. We are leaders with the potential to expand across India.' },
  { title: "Car transportation",image: car, text: 'Care packers and movers makes transporting your car easy. Hassle-free pickup and delivery will deliver your car to your doorstep on time.' },
  { title: "Commercial Shifting",image: comm, text: 'Commercial moving services are a type of business that is often overlooked by those who need professional help with their office relocation.' },
  { title: "House shifting",image: house, text: 'Whether you rent or own your home, Care packers and movers make movement hassle-free.' },
  { title: "Intercity Shifting",image: intercity, text: 'We at Care packers and movers are committed to providing you the best-quality intercity shifting services at genuine and realistic rates.' },
  { title: "International Shifting",image: international, text: 'We are providing packing and shipping services for relocating from Bangalore to several countries the world.' },
  { title: "Local Shifting",image: local, text: 'At Care packers and movers , we are committed to providing you the best quality local shifting services near you.' },
  { title: "Luggage Transport",image: luggage, text: 'We at Care packers and movers have made an association with the top-notch luggage transport service providers in Bengaluru.' },
  { title: "Office shifting",image: office, text: 'Assuming you are looking to relocate your office somewhere in India, at that point you can avail of our office relocation estimate services.' },
  { title: "Truck on Rent",image: truck, text: 'We can help you to choose the right size moving truck for your shifting requirements in Bangalore at a very affordable price.' },
  { title: "Warehousing, Storage",image: warehouse, text: 'storage unit is the place where you can keep the items safe and by the time you would be back you can get those items and could continue your living' },
];

// const cardStyle = {
//   width: '23rem',
//   height: '400px', // Adjust the overall card height as needed
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   border: '1px solid #ccc',
//   borderRadius: '8px',
//   overflow: 'hidden',
//   margin: '12px',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Optional: Add a subtle box shadow
//   paddingBottom: '1px',
//   transition: 'transform 0.4s ease-in-out',
//   animation: 'fadeInUp 0.8s ease-in-out',
// };

// const cardHoverStyle = {
//   transform: 'scale(1.05)', // Increase the scale on hover
//   backgroundColor: 'gold', // Set goldenrod background color on hover
//   transition: 'transform 0.4s ease-in-out, background-color 0.3s ease-in-out', // Smooth transition for both transform and background color
//   };

// const imageStyle = {
//   flex: '1', // Let the image take the available space
//   objectFit: 'cover', // Maintain aspect ratio and cover the space
//   width: '100%', // Set a uniform width for the image
//   height: '200px', // Set a uniform height for the image
// };

// const cardTextStyle = {
//   padding: '1rem',
//   marginBottom: '70px', // Adjust the top margin for the title
//   fontFamily: 'Roboto, sans-serif',
//   color: '#555', // Soft color
//   lineHeight: '1.5'
// };

const Cards2 = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
  
    const handleCardHover = (index) => {
      setHoveredIndex(index);
    };
  
    const handleCardLeave = () => {
      setHoveredIndex(null);
    };
  
    return (
      <>
        {card_data.map((card, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-2xl m-4 card-container"
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <img src={card.image} alt={`Card ${index + 1}`} className='w-full h-64 object-cover' />
            <div className="px-6 py-4">
              <h5 className="font-bold text-xl mb-2">{card.title}</h5>
              <p className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{card.text}</p>
            </div>
          </div>
          
          




        ))}
      </>
    );
  };
  
  export default Cards2;