import React, { useState, useEffect } from 'react';

const Home = () => {
  let traits = [
    "Software Engineer", "Bouldering enjoyer",
    "Friendly neighborhood developer", "UX Enchanter & UI Charmer"
  ];
  let counter = 0;
  let [currentTrait,setCurretTrait] = useState("");
  const wait = ms => new Promise(res => setTimeout(res, ms));
  // show trait
    // add class or just change opacity in react style
  // wait some time
    // await wait function
  // fade out trait
    // remove class or just change opacity in react style
  // update trait
    // some javascript
  // fade in trait
    // add class or just change opacity in react style
  // repeat
    // making use of setInterval 
  // useEffect(() => {
  //   if (counter >= 4) setCounter(0);

  //   const updateCounter = setInterval(async () => {
  //     console.log(counter)
  //     const h1 = document.querySelector('#trait');
  //     if (h1.classList.contains("fade-in-image")) {
  //       h1.classList.remove('fade-in-image');
  //       await wait(2000)
  //     }
  //     h1.classList.add('fade-in-image');
  //     setCounter(counter + 1);
  //     setTrait(traits[counter]);
  //   }, 4000);
  //   return () => {
  //     clearInterval(updateCounter);
  //   };
  // }, [counter])
  const updateCounter = setInterval(async () => {
    if (counter >= 4) counter = 0;

    const h1 = document.querySelector('#trait');
    if (h1.classList.contains("fade-in-image")) {
      h1.classList.remove('fade-in-image');
      await wait(2000)
    }
    h1.classList.add('fade-in-image');
    counter++;
    setCurretTrait(traits[counter])
    return () => {
      clearInterval(updateCounter);
    };
  }, 4000);


  return (
    <div className="header">
      <div className="inner-header flex">
        <h1 className='name'>Kareem Itani</h1>
        <h1 id='trait' className='fade-in-image'>{currentTrait}</h1>
      </div>
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
            fill="rgba(255,255,255,0.7)"
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
  );
};
export default Home;
