// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Nav/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';

import { Fade, Bounce, Slide, Zoom,LightSpeed,Rotate,Roll,Flip } from "react-swift-reveal";
import Mini_nav from './components/Mini_nav/Mini_nav';
import SocialIcons from './components/Socia_Icons/SocialIcons';
import bg from './components/assets/background.jpg'


const App = () => {
  return (<>
   
    <Router>
        <Mini_nav/>
      <Navbar />
      
      <SocialIcons/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery/>} />

        {/*         
        <Route path="/contact" component={Contact} /> */}
      </Routes>
      
    </Router>
</>    
);
}

export default App;
