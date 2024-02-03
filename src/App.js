import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import frame from './components/assets/frame2.jpg'
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
    <Nav/>
    <div className='frame'>
    <img src={frame}  alt="frame"  />      
    </div>
    <Footer/>
    </div>
  );
}

export default App;
