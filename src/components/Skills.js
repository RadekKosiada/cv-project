import React from "react";
import "../App.css";

//component for Strengths & Languages
function Skills(props) {
  return (
    <div className={`skills ${props.skillClass}`}>
      <h1 className="skills-header">{props.header}</h1>

      {props.skillsData.map((skill, index) => {
        const skillName = skill.strength ? skill.strength : skill.language;
        const skillDescription = skill.description ? skill.description : skill.level;

        return (
          <div key={index} className={`${props.skillClass}-unit`}>
            <h3 className={`${props.className}-name`}>{skillName}</h3>
            <p className={`${props.className}-description`}>
              {skillDescription}
            </p>
          </div>
        );
      })}

    </div>
  );
}

export default Skills;
