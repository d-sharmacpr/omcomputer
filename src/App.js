import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import React,{Component,Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
     <Navbar/> 
    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </Router>

  <Footer/>
  </Fragment>
   
  );
}

export default App;
