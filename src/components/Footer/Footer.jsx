import React, { useEffect } from 'react';
import './Footer.css'
const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      
      if (scrollTop + clientHeight >= scrollHeight) {
        document.querySelector('.footer').style.display = 'block';
      } else {
        document.querySelector('.footer').style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="footer">
      Copyright © 2024 Care Packers And Movers. All rights reserved | Designed by Egalitarian Tech Connectivity Pvt. Ltd
    </div>
  );
}

export default Footer;
