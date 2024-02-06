import React from 'react'
import {Link} from 'react-router-dom'
import './Gallery.css'


const Gallery = () => {
  return (
    <>    
    <div className='background'>
    <h1>Gallery</h1>
    <h3 className='Linker'><Link to="/gallery" className="navbar-link">Home</Link>- Gallery</h3>
    </div>
    
    <div className='title'>
    <h1>OUR GALLERY</h1>
    </div>
  



    
    </>

  )
}

export default Gallery