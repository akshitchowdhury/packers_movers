import React from 'react';
import { generateLink } from '@reslear/whatsapp-link';


import icon from '../assets/whatsapp-logo-background-29.png';
import './WhatsAppButton.css'

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = generateLink(phoneNumber, message);
    window.open(url, '_blank');
  };

  return (
    <img
      onClick={handleClick}
      src={icon}
      alt="icon"
      style={{ height: '100px', width: '130px', transition: 'transform 0.2s', cursor: 'pointer' }}
      className="whatsapp-icon"
    />
  );
};

export default WhatsAppButton;
