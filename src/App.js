import React from 'react';
import './style.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';


export default function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
    </div>
  );
}
