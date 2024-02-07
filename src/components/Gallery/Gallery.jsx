import React from 'react'
import {Link} from 'react-router-dom'
import './Gallery.css'
import Tiles from './Tiles/Tiles'

import i1 from '../Gallery/Tiles/i1.png';
import i2 from '../Gallery/Tiles/i2.png';
import i3 from '../Gallery/Tiles/i3.png';
import i4 from '../Gallery/Tiles/i4.png';
import Video from './Video/Video';




const images = [i1, i2, i3, i4];

const urls = [
    "https://youtube.com/shorts/hx6PwCL5tqo?si=YMNM6wFCH-LudWlO",
    "https://youtube.com/shorts/IOoqkbJ77HU?si=emj6Apq_Jk_QQJUd",
    "https://youtu.be/zsIx6JQ-VHE?si=GVnd1dLOOvfjmED3",
    "https://www.youtube.com/watch?v=tWn3UjOKe5Y"
  ];


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
    
    <br />
    <br />
    <br />

    <div className='vids'>
    {urls.map((url, index) => (
        <Video key={index} url={url} />
      ))}
    </div>
    
    <br />
    <br />
    <br />
    <br />
    <br />
    


    
    </>

  )
}

export default Gallery