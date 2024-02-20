import React, { useEffect } from 'react';

import './Services.css';


import { Link } from 'react-router-dom'


import Card_exec from './Card_exec';


const Services = () => {
    useEffect(() => {
    const serviceContainer = document.querySelector('.background');
    if (serviceContainer) {
      serviceContainer.classList.add('fade-in');
    }
  }, []);


   

  return <>
   <div className="bg-gray-200 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Services</h1>
      <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-8">
        <Link to="/" className="navbar-link">Home</Link> - Services
      </h3>
    </div>

    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
   
    <Card_exec/>

</>
}

export default Services;
