import React from 'react';

const Skills = () => {
  let skills = ["Javascript","java", "html"];
  return <div>
    <h1 className='parent-container'>Skills</h1>
    <div className='skills'>
      <p>hi</p>

    </div>
    {skills.map((skill) => {
      <div className={skill}/>
})}
  </div>;
};
export default Skills;
