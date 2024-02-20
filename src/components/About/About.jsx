import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { Bounce } from "react-swift-reveal";
import ReactPlayer from 'react-player';

const url = "https://www.youtube.com/watch?v=QgC-E41w084&pp=ygUScGFja2VycyBhbmQgbW92ZXJz"

const About = () => {
  return (
    <>    
      <div className="bg-gray-200 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">About Us</h1>
      <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-8">
        <Link to="/" className="navbar-link">Home</Link> - Services
      </h3>
    </div>
      <br />
      <br />
      <div className="container mx-auto px-4">
        <Bounce>
          <div className='title text-center'>
            <h1>ALWYN PACKERS</h1>
          </div>
        </Bounce>
        <br />
        <div className='flex flex-wrap'>
        <div className='about-content desc flex flex-col md:flex-row justify-center items-center'>
          <ReactPlayer className="md:mr-8 mb-4 md:mb-0" url={url} />
          <p className="md:max-w-xl md:text-left font-serif text-lg text-olive leading-relaxed">
  Welcome to Alwyn Packers, your trusted partner in hassle-free relocation solutions!
  
  At Alwyn Packers, we understand that moving can be both exciting and daunting. That's why we're here to make your relocation experience smooth, seamless, and stress-free. 
  
  With years of experience in the industry, our team of dedicated professionals is committed to providing top-notch packing and moving services tailored to meet your unique needs. Whether you're moving across town or across the country, we've got you covered every step of the way.
  
  At Alwyn Packers, we're more than just a moving company. We're your partner in making your relocation journey a breeze. Contact us today to learn more about our services and how we can help you with your upcoming move. Let's make moving a memorable experience—for all the right reasons!
</p>

        </div>
        </div>
      </div>
    </>
  );
}

export default About;
