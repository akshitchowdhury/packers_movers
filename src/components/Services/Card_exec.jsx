import React from 'react'
import './Card_exec.css'
import Cards2 from './Cards/Cards2';
import Cards from './Cards/Cards';
import { Fade, Bounce, Slide, Zoom,LightSpeed,Rotate,Roll,Flip } from "react-swift-reveal";
const renderCards = () => {
    const cardArray = new Array(1).fill(null);

    return cardArray.map((_, index) => (
      <Cards2 key={index} />
    ));
  };
const Card_exec = () => {
  return (
    <>
    <Zoom>
<div className='title'>
    <h1>POPULAR SERVICES</h1>
</div>
 </Zoom> 
  
  <div className='flex flex-wrap justify-center'>{renderCards()}</div>;

  
  
    
    </>
  )

}

export default Card_exec