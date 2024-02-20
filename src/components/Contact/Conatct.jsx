import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Bounce } from "react-swift-reveal";
import MapLeaflet from './Map/MapLeaflet';
import InquiryAndMapComponent from './InquiryForm/InquiryForm';


const Conatct = () => {
  return (
    <div className='contact'>
    <br />
    <br />
    <br />
    <br />
    <div className="bg-gray-200 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Contact</h1>
      <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-8">
        <Link to="/" className="navbar-link">Home</Link> - Services
      </h3>
    </div>
<br />
<br />
<br />
<br />
<br />

    <div className='title'>
        <h1>CONTACT US</h1>
      </div>
    <br />  
    <br />  
    <br />  
    <InquiryAndMapComponent/>
    </div>
  )
}

export default Conatct