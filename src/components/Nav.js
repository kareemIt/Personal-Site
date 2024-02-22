import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
  return <div className='nav'>
    <ul>
      <li><a className='me-nav'>Kareem Itani</a></li>
    <div className='right-nav'>
      <li><Link to="#About" smooth="true">About</Link></li>
      <li><Link to="#Skills" smooth="true">Skills</Link></li>
      <li><Link to="#Project" smooth="true">Project</Link></li>
    </div>
  </ul>
  </div>;
};
export default Nav;
