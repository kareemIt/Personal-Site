import React from 'react';
import github from '../icons/github.svg'
import email from '../icons/email.svg'
import linkedin from '../icons/linkedin.svg'


const About = () => {
  return <div className='parent-container'>
    <h1 className='title'>About</h1>
    <div className='text'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className='about-icons'>
      <a href="https://www.w3schools.com/">
      <img src={email}  className='button'/> 
      </a>
      <a href="https://github.com/kareemIt">
      <img src={github}  className='button'/> 
      </a>
      <a href="https://www.linkedin.com/in/kareem-itani/">
      <img src={linkedin}  className='button'/> 
      </a>
    </div>
    </div>
  </div>;
};
export default About;
