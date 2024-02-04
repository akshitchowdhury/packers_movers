// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Nav/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/gallery" component={Gallery} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
}

export default App;
