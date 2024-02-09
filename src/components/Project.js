import React from 'react';
import projectInfo from "../utils/Projects.json"
import share from '../icons/share.svg'

const Project = () => {
  return <div className='parent-container'>
    <h1 className='title' >Project</h1>
    <div className='projects-container'>
      {projectInfo.projects.map((project, index) => (
        <div className='project-container' key={index}>
                <h1>{project.name}</h1>
                <h1>{project.description}</h1>
                <img src={share} className='button'/> 
                </div>
            ))}
    </div>
  </div>;
};
export default Project;
