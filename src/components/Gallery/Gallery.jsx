import React from 'react'
import {Link} from 'react-router-dom'
import './Gallery.css'
import Gallery_exec from './Gallery_exec'



const Gallery = () => {

   


  return (
    <>    
    <div className='background'>
    <h1>Gallery</h1>
    <h3 className='Linker'><Link to="/" className="navbar-link">Home</Link>- Gallery</h3>
    </div>
    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <Gallery_exec/>
    <br/>
    <br/>
    <br/>
    <br/>


    
    </>

  )
}

export default Gallery