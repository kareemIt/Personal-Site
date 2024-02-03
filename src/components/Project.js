import React from 'react';
import ProjectContainer from "./ProjectContainer"
import projectInfo from "../utils/Projects.json"

const Project = () => {
  return <div>
    <h1>Project</h1>
    <div className='projects-container'>
      {projectInfo.projects.map((project, index) => (
        <div className='project-container'>
                <h1>{project.name}</h1>
                <h1>{project.description}</h1>
                <button className='button'>{project.link}</button>
                </div>
            ))}
    </div>
  </div>;
};
export default Project;
