import React from 'react';
import './style.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Certs from './components/Certs'
import Footer from './components/Footer'
// import {BrowserRouter} from 'react-router-dom'

export default function App() {
  return (
    // <BrowserRouter>
      <div>
        <Nav />
        <Home />
        <About />
        <div className='skills-container'>
          <Skills />
          <Certs />
        </div>
        <Project />
        <Footer />
      </div>
    // </BrowserRouter>
  );
}
