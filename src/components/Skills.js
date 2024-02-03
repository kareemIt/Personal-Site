import React from 'react';

const Skills = () => {
  let skills = ["Javascript","java", "html"];
  return <div>
    <h1>Skills</h1>
    {skills.map((skill) => {
      <div className={skill}/>
})}
  </div>;
};
export default Skills;
