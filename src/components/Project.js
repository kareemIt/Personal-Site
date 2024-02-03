import React from 'react';
import ProjectContainer from "./ProjectContainer"
import projectInfo from "../utils/Projects.json"

const Project = () => {
  return <div>
    <h1>Project</h1>
    <div>
      {projectInfo.projects.map((project, index) => (
        <div>
                <h1>{project.name}</h1>
                <h1>{project.description}</h1>
                <h1>{project.link}</h1>
                </div>
            ))}
    </div>
  </div>;
};
export default Project;
