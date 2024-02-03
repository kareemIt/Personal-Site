import React from 'react';
import github from '../icons/github.svg'
import email from '../icons/github.svg'
import linkedin from '../icons/github.svg'


const About = () => {
  return <div className='about'>
    <h1>About</h1>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <svg>{github}</svg>
    <svg>email</svg>
    <svg>linkedin</svg>
  </div>;
};
export default About;
