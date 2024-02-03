import React from 'react';

const ProjectContainer = (pro, index) => {
  console.dir(pro)
  return <div>
    <h1>worked</h1>
    <h1>{pro.name}</h1>
    {/* <h1>{description}</h1>
    <h1>{link}</h1> */}
  </div>;
};
export default ProjectContainer;
