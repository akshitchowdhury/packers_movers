import React, { useEffect } from 'react';

import './Services.css';
import Cards from './Cards/Cards';

import { Link } from 'react-router-dom'
import Cards2 from './Cards/Cards2';


const Services = () => {
    useEffect(() => {
    const serviceContainer = document.querySelector('.background');
    if (serviceContainer) {
      serviceContainer.classList.add('fade-in');
    }
  }, []);


    const renderCards = () => {
    const cardArray = new Array(1).fill(null);

    return cardArray.map((_, index) => (
      <Cards2 key={index} />
    ));
  };

  return <>
  <div className='background'>
    <h1>Services</h1>
    <h3 className='Linker'><Link to="/" className="navbar-link">Home</Link>- Services</h3>

    </div>
    
   

<div className='title'>
    <h1>POPULAR SERVICES</h1>
</div>
  
  
  <div className='grid-container'>{renderCards()}</div>;

  
  <br />
    <br />
    <br />
    <br />
    <br />

</>
}

export default Services;
