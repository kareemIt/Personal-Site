import React, {useState} from 'react';
import angular from '../icons/angular.svg'
import azure from '../icons/azure.svg'
import css from '../icons/css.svg'
import figma from '../icons/figma.svg'
import html from '../icons/html.svg'
import java from '../icons/java.svg'
import javascript from '../icons/javascript.svg'
import node from '../icons/node.svg'
import postgresSQL from '../icons/postgreSQL.svg'
import react from '../icons/react.svg'
import spring from '../icons/spring.svg'
import typescript from '../icons/typescript.svg'

const Skills = () => {
  const [skills,setSkills] = useState(
    [ [java,"Java"],[javascript,"Javascript"], 
    [typescript,"Typescript"],[react,"React"],
    [angular,"Angular"],[css,"CSS"],
    [html,"HTML"],[figma,"Figma"],
    [azure,"Azure"],[node,"Node"],
    [postgresSQL,"PostgresSQL"],[spring,"Spring"]
  ]
  );
  return <div className='skills-title'> 
    <h1>Skills</h1>
    <div className='skills'>
    {skills.map((skill,index) => (
          <div key={index}>
            <img src={skill[0]} className='icon'/>
            <p>{skill[1]}</p>
          </div>
          ))}
    </div>
  </div>;
};
export default Skills;
