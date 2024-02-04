// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles as needed
import Footer from '../Footer/Footer';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{color: 'goldenrod'}}>
          Your Logo Here
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/contact" className="navbar-link">Contact Us</Link>
        </div>
        <Footer/>
      </div>
    </nav>
  );
}

export default Navbar;
