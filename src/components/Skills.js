import React from "react";
import "../App.css";

function Skills(props) {
  let strengthsArr = [];
  Object.keys(props).forEach(index => {
    strengthsArr.push(props[index]);
  });
  //console.log(strengthsArr)

  return (
    <div className="skills-unit">
      <h1 className="skills-header">Strengths</h1>
      {strengthsArr.map((s, i) => {
        return (
          <div key={i} className="skill">
            <h3 className="skill-name">{s.strength}</h3>
            <p className="skill-description">{s.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
