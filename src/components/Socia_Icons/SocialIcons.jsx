import React from 'react';
import { FaYoutube, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import './SocialIcons.css'; // Import CSS file for styling

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
      <a href="tel:+123456789"><FaPhone size={24} /></a>
    </div>
  );
};

export default SocialIcons;
