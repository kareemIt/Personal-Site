import React from 'react';
import './style.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Certs from './components/Certs'
import { BrowserRouter} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Home />
        <About  id="about"/>
        <div className='skills-container'>
          <Skills />
          <Certs />
        </div>
        <Project />
      </div>
    </BrowserRouter>
  );
}
