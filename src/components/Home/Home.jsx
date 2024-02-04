// Home.js
import React, { useEffect } from 'react';
import './Home.css';
import frame from '../assets/frame2.jpg'


const Home = () => {
  useEffect(() => {
    const homeContainer = document.querySelector('.home-container');
    if (homeContainer) {
      homeContainer.classList.add('fade-in');
    }
  }, []);

  return (
    <>
    <div className="home-container">
      {/* <h1>Welcome to Our Website</h1>
      <p>This is the Home page content. Feel free to customize it according to your needs.</p> */}
    <img src= {frame} alt="frame" />
    
    </div>
    </>
  );
}

export default Home;
