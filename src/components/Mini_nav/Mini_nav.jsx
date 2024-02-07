import React from 'react'
import './Mini_nav.css'
import { SocialIcon } from 'react-social-icons'
import { FaFontAwesome } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






const Mini_nav = () => {
  return (
        <nav className='mini_nav'>



         {/* <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebook} /> */}
        {/* <SocialIcon url="https://twitter.com" /> */}
     <div style={{ fontWeight: 'bold', color: 'black' }}>
      <span role="img" aria-label="phone symbol">&#x260E;</span> 
      <span>+91 8884 242 825 | +91 9902 989 055 | +91 9482 736 693</span>
     
      <span> chanconstructions18@gmail.com</span>
    </div>
    </nav>
  )
}

export default Mini_nav