import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { Bounce } from "react-swift-reveal";
import ReactPlayer from 'react-player';

const url = "https://www.youtube.com/watch?v=QgC-E41w084&pp=ygUScGFja2VycyBhbmQgbW92ZXJz"

const About = () => {
  return (
    <>    
    <div className='background'>
      <h1>About Us</h1>
      <h3 className='Linker'><Link to="/" className="navbar-link">Home</Link>- About Us</h3>
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
    <Bounce>
      <div className='title'>
        <h1>ALWYN PACKERS</h1>
      </div>
    </Bounce>
    <br/>
    <div className='desc' style={{}}>
      <ReactPlayer style={{ float: 'right', width: '200px', height: '100px', backgroundColor: '#f0f0f0', borderRadius: '10px', margin: '10px' }} url={url}/>
      <p style={{ 
  marginLeft: '10px', 
  marginRight: '430px', 
  fontFamily: 'cursive', /* Use Roboto font style */
  fontSize: '25px', /* Adjust font size as needed */
  color: 'olive' /* Golden rod shade color */
}}>
  Welcome to Alwyn Packers, your trusted partner in hassle-free relocation solutions!
  <br /><br />
  At Alwyn Packers, we understand that moving can be both exciting and daunting. That's why we're here to make your relocation experience smooth, seamless, and stress-free. 
  <br /><br />
  With years of experience in the industry, our team of dedicated professionals is committed to providing top-notch packing and moving services tailored to meet your unique needs. Whether you're moving across town or across the country, we've got you covered every step of the way.
  <br /><br />
  At Alwyn Packers, we're more than just a moving company. We're your partner in making your relocation journey a breeze. Contact us today to learn more about our services and how we can help you with your upcoming move. Let's make moving a memorable experience—for all the right reasons!
</p>

    </div>
    </>
  )
}

export default About;
