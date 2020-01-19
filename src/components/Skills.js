import React from "react";
import "../App.css";

function Skills(props) {
  return (
    <div className={`skills ${props.skillClass}`}>
      <h1 className="skills-header">{props.header}</h1>

      {props.skillsData.map((skill, index) => {
        const skillName = skill.strength ? skill.strength : skill.language;
        const skillDescription = skill.description ? skill.description : skill.level;

        return (
          <div key={index} className={`${props.className}-unit`}>
            <h3 className={`${props.className}-name`}>{skillName}</h3>
            <p className={`${props.className}-description`}>
              {skillDescription}
            </p>
          </div>
        );
      })}

      {/* {strengthsArr.map((s, i) => {
        return (
          <div key={i} className="skill">
            <h3 className="skill-name">{s.strength}</h3>
            <p className="skill-description">{s.description}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default Skills;
