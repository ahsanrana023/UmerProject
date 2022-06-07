import React from 'react';
import './App.css';
import Header from './components/Header';
import Prices from './components/Prices';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Sign from './components/Sign';

 function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Header />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Sign-in" element={<Sign />} />
          <Route path="/About" element={<About />} />

        </Routes>
      </Router>
  </div>
  );
}

export default App;