import React from 'react';
import CertInfo from "../utils/certs.json"

const Certs = () => {
  return <div>
    <h1>Certification</h1>
    <div className='outter-cert-container'>
      {CertInfo.Certs.map((cert, index) => (
        <div className='cert-container'>
            <p className='cert'>cert.name  <button className='button'>cert.link</button></p>
            </div>
            ))}
    </div>
  </div>;
};
export default Certs;
