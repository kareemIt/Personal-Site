import React from 'react';
import CertInfo from "../utils/certs.json"
import share from '../icons/share.svg'


const Certs = () => {
  return <div className='certs-container'>
    <h1 className='title'>Certification</h1>
    <div className='outter-cert-container'>
      {CertInfo.Certs.map((cert, index) => (
        <div className='cert-container' key={index}>
            <p className='cert' key={index}>{cert.name}
            <a href={cert.link}>
              <img src={share} className='button-link'/> 
              </a>
              </p>
            </div>
            ))}
    </div>
  </div>;
};
export default Certs;
