import React, { useState, useEffect } from 'react';

const Home = () => {
  let traits = [
    "Software Engineer","Bouldering enjoyer",
    "friendly neighborhood developer","ux/ui doer"
  ];
  const [trait, setTrait] = useState(traits[0]);
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   if (counter >= 4) setCounter(0);

  //   const updateCounter = setInterval(() => {
  //     setTrait(traits[counter]);
  //     setCounter(counter + 1);
  //   }, 3000);
  //   return () => {
  //     clearInterval(updateCounter);
  //   };
  // }, [counter])

  return (
    <div className="header">
      <div className="inner-header flex">
        <path
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="10"
          strokeMiterlimit="10"
          d="M57,283"
        />
        <div>
        <h1>Hey, I am Kareem Itani</h1>
        <div className='traits'>
        <h2>{trait}</h2>
        </div>
        </div>
      </div>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default Home;
