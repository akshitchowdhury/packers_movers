
import './App.css';
import Nav from './components/Nav/Nav';

import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route,Routes, Link, useNavigate } from 'react-router-dom';

import About from './components/About/About';
import Home from './components/Home/Home';
import frame from './components/assets/frame2.jpg'


function App() {

  // const navigate = useNavigate();

  // const handleHomeClick = () => {
  //   // Navigate to the default page or refresh the current page
  //   navigate('/');
  // };


  return (
    <div className="App">
    <div className='navbar'>
    <Nav/>
    
<Router>    
    <div className='links'>
    <Link to='/home'> <h3 className='home' >HOME</h3></Link>
    <Link to='/about'> <h3 className='about'>ABOUT US</h3></Link>
    <Link to='/services'>  <h3 className='services'>SERVICES</h3></Link>
    <Link to='/gallery'> <h3 className='gallery'>GALLERY</h3></Link>
    <Link to='/contact'> <h3 className='contact'>CONTACT US</h3></Link>
    </div>

    <Routes>
      <Route path='/home' element = {<Home/>}/>
       <Route path='/about' element = {<About/>}/>
      {/* <Route path='/services' element = {}/>
      <Route path='/gallery' element = {}/>
      <Route path='/contact' element = {}/>  */}
    </Routes>


</Router>


    </div>

    
   
    <Footer/>
    </div>
  );
}

export default App;
