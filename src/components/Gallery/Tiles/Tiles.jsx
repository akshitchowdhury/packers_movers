import React from 'react'
// import './Tiles.css'

const Tiles = ({images}) => {
  return (
    <>

      {images.map((image,index)=> 
      (
        <div className='tile flex flex-wrap justify-center' key={index}>
        <div className='max-w-sm rounded overflow-hidden shadow-2xl m-4 card-container'>
          <img className="w-full h-64 object-cover" src={image} alt={`image_tile_${index + 1}`} />
        </div>
        </div>
      
      
      ))}
        
        
    
    </>       
    
  ) 
}

export default Tiles