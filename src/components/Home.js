import React, { useState, useEffect } from 'react';

const Home = () => {
  let traits = [
    "Software Engineer","Bouldering enjoyer",
    "friendly neighborhood developer","ux/ui doer"
  ];
  const [trait, setTrait] = useState(traits[0]);
  const [counter, setCounter] = useState(0);

//   const div = document.querySelector('div');

// const wait = ms => new Promise(res => setTimeout(res, ms));
// async function main() {
//   for (const word of text) {
//     div.textContent = word;

//     const keyframes = [{
//       opacity: 0,
//       transform: 'translateY(-5px)',
//     }, {
//       opacity: 1,
//       transform: 'translateY(0px)',
//     }];
//     div.animate(keyframes, { duration: 200 });

//     await wait(500)
//   }
// }
// main()
  useEffect(() => {
    if (counter >= 4) setCounter(0);

    const updateCounter = setInterval(() => {
      setTrait(traits[counter]);
      setCounter(counter + 1);
      //add select tag then readd the class to make it redo animation?
    }, 3000);
    return () => {
      clearInterval(updateCounter);
    };
  }, [counter])

  return (
    <div className="header">
      <div className="inner-header flex">
        {/* <path
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="10"
          strokeMiterlimit="10"
          d="M57,283"
        /> */}
        <div>
        <h1 className='name'>Kareem Itani</h1>
        <div >
        <h1 className='fade-in-image'>{trait}</h1>
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
