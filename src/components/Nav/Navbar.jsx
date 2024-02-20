import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.jpg';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="bg-amber-300 text-white h-28">
      <div className="container flex items-center justify-between px-3 py-2 mx-auto max-w-screen-xl">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="logo" className="h-10 mr-2" />
        </Link>

        <div className="flex-grow"></div> {/* Fill remaining space */}
        
        <div className="link-tab navbar-links flex flex-col md:flex-row md:items-center md:justify-end w-full md:w-auto md:justify-center">
  <Link to="/" className="navbar-link ml-6 text-lg md:text-3xl lg:text-3xl xl:text-2xl sm:text-2xl font-medium text-black ">Home</Link>
  <Link to="/about" className="navbar-link ml-6 text-lg md:text-3xl lg:text-3xl xl:text-2xl sm:text-2xl font-medium text-black ">About Us</Link>
  <Link to="/gallery" className="navbar-link ml-6 text-lg md:text-3xl lg:text-3xl xl:text-2xl sm:text-2xl font-medium text-black ">Gallery</Link>
  <Link to="/services" className="navbar-link ml-6 text-lg md:text-3xl lg:text-3xl xl:text-2xl sm:text-2xl font-medium text-black ">Services</Link>
  <Link to="/contact" className="navbar-link ml-6 text-lg md:text-3xl lg:text-3xl xl:text-2xl sm:text-2xl font-medium text-black ">Contact Us</Link>
</div>
</div>
      
    </nav>
  );
}

export default Navbar;
