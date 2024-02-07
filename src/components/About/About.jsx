import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { Fade, Bounce, Slide, Zoom,LightSpeed,Rotate,Roll,Flip } from "react-swift-reveal";


const About = () => {
  return (
    <>    
    
    
    <div className='background'>
    <h1>About Us</h1>
    <h3 className='Linker'><Link to="/" className="navbar-link">Home</Link>- About Us</h3>

    </div>
    <Bounce>
    <div className='title'>
      <h1>CARE PACKERS AND MOVERS</h1>
    </div>
    </Bounce>
    
    </>

  )
}

export default About