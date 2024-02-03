import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import frame from './components/assets/frame2.jpg'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route,Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';



function App() {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Navigate to the default page or refresh the current page
    navigate('/');
  };


  return (
    <div className="App">
    <div className='navbar'>
    <Nav/>
<Router>    
    <div className='links'>
    <h3 className='home' onClick={handleHomeClick}>HOME</h3>
    <Link to='/about'> <h3 className='about'>ABOUT US</h3></Link>
    <Link to='/services'>  <h3 className='services'>SERVICES</h3></Link>
    <Link to='/gallery'> <h3 className='gallery'>GALLERY</h3></Link>
    <Link to='/contact'> <h3 className='contact'>CONTACT US</h3></Link>
    </div>

    <Routes>
      <Route path='/' element = {<Home/>}/>
      {/* <Route path='/about' element = {}/>
      <Route path='/services' element = {}/>
      <Route path='/gallery' element = {}/>
      <Route path='/contact' element = {}/> */}
    </Routes>


</Router>



    </div>
    
    <div className='frame'>
    <img src={frame}  alt="frame"  />      
    </div>
    <Footer/>
    </div>
  );
}

export default App;
