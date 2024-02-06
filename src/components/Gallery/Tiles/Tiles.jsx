import React from 'react';
import i1 from '../Tiles/i1.png';
import i2 from '../Tiles/i2.png';
import i3 from '../Tiles/i3.png';
import i4 from '../Tiles/i4.png';

const images = [i1, i2, i3, i4];

const Tiles = () => {
  return (
    <>
      {images.map((image, index) => (
        <div className='tile' key={index}>
          <img src={image} alt={`image_tile_${index + 1}`} />
        </div>
      ))}
    </>
  );
}

export default Tiles;
