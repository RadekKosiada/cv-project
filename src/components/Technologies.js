import React from 'react';
import '../App.css';


function Technologies(props) {
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
    <div className="technologies">
      <h1 className="technologies-header">Technologies</h1>
      {allTools.map((tool, key) => {
        return ( <span className="technology" key={key}>{tool} </span>)
      })}
    </div>
  )
  
}

export default Technologies;