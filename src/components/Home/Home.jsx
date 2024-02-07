// Home.js
import React, { useEffect } from 'react';
import './Home.css';
import frame from '../assets/frame2.jpg';

import { Fade, Bounce, Slide, Zoom,LightSpeed,Rotate,Roll,Flip } from "react-swift-reveal";
import ReviewForm from './Review/ReviewForm/ReviewForms';
const Home = () => {
  useEffect(() => {
    const homeContainer = document.querySelector('.home-container');
    if (homeContainer) {
      homeContainer.classList.add('fade-in');
    }
  }, []);

  return (
    <>
    <Roll>
      <div className="home-container fade-in"> {/* Apply the fade-in class */}
        {/* <h1>Welcome to Our Website</h1>
        <p>This is the Home page content. Feel free to customize it according to your needs.</p> */}
        <img src={frame} alt="frame" />
      </div>
    </Roll>

    <ReviewForm/>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
  );
};

export default Home;
