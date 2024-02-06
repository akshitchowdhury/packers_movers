import React from 'react'
import {Link} from 'react-router-dom'
import './Gallery.css'
import Tiles from './Tiles/Tiles'

import i1 from '../Gallery/Tiles/i1.png';
import i2 from '../Gallery/Tiles/i2.png';
import i3 from '../Gallery/Tiles/i3.png';
import i4 from '../Gallery/Tiles/i4.png';

import ReactPlayer from 'react-player'


const images = [i1, i2, i3, i4];





const Gallery = () => {
  return (
    <>    
    <div className='background'>
    <h1>Gallery</h1>
    <h3 className='Linker'><Link to="/" className="navbar-link">Home</Link>- Gallery</h3>
    </div>
    
    <div className='title'>
    <h1>OUR GALLERY</h1>
    </div>

    <br />
    <br />
    <br />

    <div className='image_gallery'>
    <Tiles images={images} />
    </div>
  
    <div className='video'>
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=7ZoLyoFm3pg"  // Replace with your video link
        width='350px' // Adjust width as needed, e.g., '500px', '80vw'
        height='200px' // Adjust height as needed, e.g., '300px', '50vh'
      />
    </div>


    


    
    </>

  )
}

export default Gallery