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
  <div className='background'>
    <h1>Services</h1>
    <h3 className='Linker'><Link to="/" className="navbar-link">Home</Link>- Services</h3>

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
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    


</>
}

export default Services;
