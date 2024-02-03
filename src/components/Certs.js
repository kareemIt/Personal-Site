import React from 'react';
import CertInfo from "../utils/certs.json"
import share from '../icons/share.svg'


const Certs = () => {
  return <div>
    <h1>Certification</h1>
    <div className='outter-cert-container'>
      {CertInfo.Certs.map((cert, index) => (
        <div className='cert-container' key={index}>
            <p className='cert' key={index}>{cert.name}  
              <img src={share} className='button'/> 
              </p>
            </div>
            ))}
    </div>
  </div>;
};
export default Certs;
