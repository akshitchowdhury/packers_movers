import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Logo from '../assets/Logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-amber-300 text-white h-28">
      <div className="container flex items-center justify-between px-3 py-2 mx-auto max-w-screen-xl">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="logo" className="h-10 mr-2" />
        </Link>

        <div className="flex-grow"></div> {/* Fill remaining space */}
        
        <div className="link-tab navbar-links flex flex-col md:flex-row md:items-center md:justify-end w-full md:w-auto md:justify-center">
          <Link to="/" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">Home</Link>
          <Link to="/about" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">About Us</Link>
          <Link to="/gallery" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">Gallery</Link>
          <Link to="/services" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">Services</Link>
          <Link to="/contact" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">Contact Us</Link>
        </div>
      </div>
      <Footer />
    </nav>
  );
}

export default Navbar;
