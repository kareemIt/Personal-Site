import React from 'react';
import ProjectContainer from "./ProjectContainer"
import projectInfo from "../utils/Projects.json"

const Project = () => {
  console.dir(projectInfo.projects)
  return <div>
    <h1>Project</h1>
    <div>
      {projectInfo.projects.map((pro, index) => (
              <ProjectContainer pro={pro}  key={index} />
            ))}
    </div>
  </div>;
};
export default Project;
