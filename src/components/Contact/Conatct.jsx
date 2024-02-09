import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Bounce } from "react-swift-reveal";
import MapLeaflet from './Map/MapLeaflet';
import InquiryAndMapComponent from './InquiryForm/InquiryForm';


const Conatct = () => {
  return (
    <div>
    <br />
    <br />
    <br />
    <br />
         <div className='background'>
      <h1>Contact</h1>
      <h3 className='Linker'><Link to="/" className="navbar-link">Home</Link>- Contact</h3>
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