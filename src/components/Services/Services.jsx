import React from 'react';
import './Services.css';
import Cards from './Cards/Cards';
import { Link } from 'react-router-dom'
const Services = () => {
  const renderCards = () => {
    const cardArray = new Array(9).fill(null);

    return cardArray.map((_, index) => (
      <Cards key={index} />
    ));
  };

  return <>
  <div className='background'>
    <h1>About Us</h1>
    <h3 className='Linker'><Link to="/" className="navbar-link">Home</Link>- Services</h3>

    </div>
    
    <div className='title'>
      <h1>CARE PACKERS AND MOVERS</h1>
    </div>

  
  
  <div className='grid-container'>{renderCards()}</div>;
</>
}

export default Services;
