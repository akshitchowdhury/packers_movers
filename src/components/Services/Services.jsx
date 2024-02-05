import React from 'react';
import './Services.css';
import Cards from './Cards/Cards';

const Services = () => {
  const renderCards = () => {
    const cardArray = new Array(9).fill(null);

    return cardArray.map((_, index) => (
      <Cards key={index} />
    ));
  };

  return <div className='grid-container'>{renderCards()}</div>;
}

export default Services;
