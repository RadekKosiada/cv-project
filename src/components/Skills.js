import React from 'react';
import '../App.css';


function Skills(props) {
  let array = [];
  Object.keys(props).forEach((index) => {
    array.push(props[index])
  });

  let allTools = [];
  array.forEach(elem => { 
    elem.tools.forEach(tool => {
    allTools.push(tool);
    });
  });

  return (
    <div className="skills-unit">
      <h1 className="skills-header">Skills</h1>
      {allTools.map((tool, key) => {
        return ( <span className="skill" key={key}>{tool} </span>)
      })}
    </div>
  )
  
}

export default Skills;