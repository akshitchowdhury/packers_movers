
// import React, { useState, useEffect } from 'react';

// import './Footer.css';

// function ScrollDetectFooter() {
//   const [showFooter, setShowFooter] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.body.offsetHeight;
//       const scrollPosition = window.scrollY;

//       if (windowHeight + scrollPosition >= documentHeight) {
//         setShowFooter(true);
//       } else {
//         setShowFooter(false);
//       }
//     }

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <footer className={`footer bg-gray-900 text-black p-4 ${showFooter ? 'visible' : ''}`}>
//       <div className="container mx-auto">
//         {/* Your footer content */}
//         <p className="text-center">© 2024 Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default ScrollDetectFooter;




import React, { useRef } from 'react';
import './Footer.css';
import footLogo from '../assets/logo.png';

import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import map_short from '../assets/map_short.png'
import MapLeaflet from '../Contact/Map/MapLeaflet';

const Footer = () => {
 

  const styles = {
    container: {
      position: 'absolute',
      left: '86%',
      bottom: '100%',
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
      zIndex: '9999',
      
    },
    icon: (color, hoverColor) => ({
      fontSize: '25px',
      color: color,
      transition: 'transform 0.3s',
    }),
    link: {
      textDecoration: 'none',
      color: '#fff',
      '&:hover svg': {
        transform: 'scale(1.1)',
        color: (theme) => theme.color.hoverColor,
      },
    }
  };
  
  return (
    <footer className="foot relative bg-gray-200 py-27 ">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('../../assets/f3.webp')"}}></div>

      {/* Content */}
      <div className="container mx-auto relative z-10" style={{ marginTop: "-55px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="text-black">
            <h4 className="text-3xl font-bold mb-4 mt-4">About Us</h4>
            <img src={footLogo} className='footerLogo' alt="footerLogo" />
            
            <p className='text-2xl mb-4 tracking-wide leading-relaxed'>Alwyn Packers: Your Trusted Partner in Smooth Moves! With years of expertise and a commitment to excellence, we make relocation a breeze.</p>
          </div>

          {/* Column 2 */}
          <div className="text-black">
            <h4 className="text-3xl font-bold mb-4 mt-4">Contact Us</h4>
            <br />
            <p className="text-2xl mb-4 tracking-wide leading-relaxed">Kk industries 
              21/5A
              Behind Manasa theatre
              Canara bank Road
              Konnankunte cross
              Bangalore 
              560062
            </p>
            <br/>
            <p className='text-2xl mb-4 tracking-wide leading-relaxed'>Email: alwynpackers@gmail.com</p>
            <p className='text-2xl mb-4 tracking-wide leading-relaxed'>Phone: +91 98453-71516</p>
          </div>

          {/* Column 3 */}
            
          <div className="text-black">
            <h4 className="text-3xl font-bold mb-4 mt-4">Quick Links</h4>
            <br />
            
            <ul>
            <div className="link-tab navbar-links flex flex-col md:flex-col md:items-start md:justify-end w-full md:w-auto md:justify-center">
            <li className='text-2xl mb-4 tracking-wide leading-relaxed'>
            <Link to="/" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">Home</Link>
              </li>

            <li className='text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/about" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">About Us</Link>
            </li>
            <li className='text-2xl mb-4 tracking-wide leading-relaxed'>
            <Link to="/gallery" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">Gallery</Link>
            </li>
            <li className='text-2xl mb-4 tracking-wide leading-relaxed'>
            <Link to="/services" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">Services</Link>
            </li>
            <li className='text-2xl mb-4 tracking-wide leading-relaxed'>
            <Link to="/contact" className="ml-6 text-lg font-medium text-black transition duration-300 hover:text-white hover:text-lg hover:transform hover:scale-110">Contact Us</Link>
            </li>
        </div>
            </ul>
                 
          </div>
          

          {/* Column 4 */}

          <div className="text-black">
            <h4 className="text-3xl font-bold mb-4 mt-4">Follow Us</h4>
            <br />
            <div className='flex space-x-4'>
            {/* <img className='map_short ' src={map_short} alt="map_short" /> */}
            <MapLeaflet/>
           </div>
          </div>

        </div>

        {/* Powered by Innomatrics Technologies */}
        
        <h3 className="text-center text-black text-xl mb-6">Powered by Innomatrics Technologies</h3>
        
      </div>
    </footer>
  );
};

export default Footer;













