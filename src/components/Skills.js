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
      {allTools.map((tool, key) => {
        return ( <span key={key}>{tool} </span>)
      })}
    </div>
  )
  
}

export default Skills;