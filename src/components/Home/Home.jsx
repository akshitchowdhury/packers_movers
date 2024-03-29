import React, { useEffect, useState } from 'react';
import './Home.css';
import frame1 from '../assets/frame1.jpg';
import frame2 from '../assets/frame2.jpg';
import frame3 from '../assets/frame3.jpg';
import frame4 from '../assets/frame4.jpg';
import frame5 from '../assets/frame5.jpg';
import frame6 from '../assets/frame6.jpg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReviewForm from './Review/ReviewForm/ReviewForms';
import Card_exec from '../Services/Card_exec';
import Gallery_exec from '../Gallery/Gallery_exec';
import GoogleReviewsButton from './GoogleReviewsButton';

import boundary from '../assets/boundary.jpg'
import Footer from '../Footer/Footer';



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // 5 is the number of images
    }, 2000); // Auto swipe every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>


      <Carousel className='carousel'
        selectedItem={currentIndex}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        autoPlay={false} // Auto play is handled manually
        interval={2000} // Interval for manual swipe
        transitionTime={500} // Transition time for manual swipe
      >
      
        <div>
          <img src={frame6} alt="frame6" />
        </div>
        <div>
          <img src={frame2} alt="frame2" />
        </div>
        <div>
          <img src={frame3} alt="frame3" />
        </div>
        <div>
          <img src={frame4} alt="frame4" />
        </div>
        <div>
          <img src={frame5} alt="frame6" />
        </div>
        <div>
          <img src={frame1} alt="frame1" />
        </div>
      </Carousel>
      <Card_exec/>
      
      <Gallery_exec/>
      
      {/* <GoogleReviewsButton/> */}
      
      {/* <Footer/> */}
    </>
  );
};

export default Home;
