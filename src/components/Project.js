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
                <p className='description'>{project.description}</p>
                <a href={project.link}>
                  <img src={share} className='button-link'/> 
                </a>
                </div>
            ))}
    </div>
  </div>;
};
export default Project;
