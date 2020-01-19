import React from "react";
import "../App.css";

function Strengths(props) {
  let strengthsArr = [];
  Object.keys(props).forEach(index => {
    strengthsArr.push(props[index]);
  });
  //console.log(strengthsArr)

  return (
    <div className="strengths-unit">
      <h1 className="strengths-header">Strengths</h1>
      {strengthsArr.map((s, i) => {
        return (
          <div key={i} className="strength">
            <h3 className="strength-name">{s.strength}</h3>
            <p className="strength-description">{s.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Strengths;
