import React from 'react';
import './style.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Certs from './components/Certs';
import EmailBuddy from './components/EmailBuddy';
import EmailBuddyPrivacy from './components/EmailBuddyPrivacy';
import EmailBuddyDeleteAccount from './components/EmailBuddyDeleteAccount';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/emailbuddy" element={<EmailBuddy />} />
        <Route path="/emailbuddy/privacy" element={<EmailBuddyPrivacy />} />
        <Route path="/emailbuddy/delete-account" element={<EmailBuddyDeleteAccount />} />
        <Route path="*" element={
          <div>
            <Nav />
            <Home />
            <About id="about" />
            <div className='skills-container'>
              <Skills />
              <Certs />
            </div>
            <Project />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
