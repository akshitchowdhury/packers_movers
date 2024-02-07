import React from 'react';
import { FaYoutube, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import './SocialIcons.css'; // Import CSS file for styling

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="youtube-icon"><FaYoutube size={24} /></a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-icon"><FaFacebook size={24} /></a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-icon"><FaInstagram size={24} /></a>
      <a href="tel:+123456789" className="phone-icon"><FaPhone size={24} /></a>
    </div>
  );
};

export default SocialIcons;
