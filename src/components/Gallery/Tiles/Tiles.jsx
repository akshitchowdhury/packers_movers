import React from 'react'
import './Tiles.css'

const Tiles = ({images}) => {
  return (
    <>

      {images.map((image,index)=> 
      (
        <div className='tile' key={index}>
          <img src={image} alt={`image_tile_${index + 1}`} />
        </div>
      
      
      ))}
        
        {/* <div className='tile'>
          <img src= {images} alt="images"  />
        </div> */}
    
    
    </>       
    
  ) 
}

export default Tiles