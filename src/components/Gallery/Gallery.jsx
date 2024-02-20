import React from 'react'
import {Link} from 'react-router-dom'
import './Gallery.css'
import Gallery_exec from './Gallery_exec'



const Gallery = () => {

   


  return (
    <>    
    <div className="bg-gray-200 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Contact</h1>
      <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-8">
        <Link to="/" className="navbar-link">Home</Link> - Services
      </h3>
    </div>
    
    
    <Gallery_exec/>
    <br/>
    <br/>
    <br/>
    <br/>


    
    </>

  )
}

export default Gallery