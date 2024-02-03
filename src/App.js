import React from 'react';
import './style.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';


export default function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
    </div>
  );
}
