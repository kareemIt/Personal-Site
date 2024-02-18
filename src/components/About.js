import React from 'react';
import github from '../icons/github.svg'
import email from '../icons/email.svg'
import linkedin from '../icons/linkedin.svg'


const About = () => {
  return <div className='parent-container'>
    <h1 className='title'>About</h1>
    <div className='text'>
      <p>
Hey, I'm Kareem Itani, a graduate with a Bachelors of Science in Computer Science from Brooklyn College, City University of New York, class of 2022. My journey in the tech realm has shaped my commitment to making a positive impact. I'm deeply passionate about contributing to the community through my work in software engineering. Whether it's tackling challenges or delving into new technologies, I find joy in the world of coding. Outside of the digital realm, you'll likely find me exploring new hobbies and embracing the endless possibilities that come with learning. Let's connect and build a tech-inspired future together!</p>
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
