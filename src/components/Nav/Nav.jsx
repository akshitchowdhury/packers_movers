import React from 'react'
import logo from '../assets/logo.png'
import '../Nav/Nav.css'
const Nav = () => {
  return (
    <>
    <div className='main'>
    <div className='Nav'>
        <img src= {logo} className='logo'/>
    </div>
    
    <div className='links'>
    <h3 className='home'>HOME</h3>
    <h3 className='about'>ABOUT US</h3>
    <h3 className='services'>SERVICES</h3>
    <h3 className='gallery'>GALLERY</h3>
    <h3 className='contact'>CONTACT US</h3>
    </div>
    
    </div>
    
    </>
  )
}

export default Nav