import React from 'react';
import './App.css';

import { formatDate } from './helpers';


function Experience(props) {
  console.log(props.mainData);

  return (
    <div className={`experience ${props.className}`}>
      <h1 className="header-experience">{props.header}</h1>

      {props.mainData.map((elem, index) => {
        const title = elem.jobTitle ? elem.jobTitle : elem.degree;
        const institution = elem.companyName ? elem.companyName : elem.institution;
        //object deconstructing
        const { location, country, url, startDate: start, endDate: end } = elem;
        const fields = elem.responsibilities ? elem.responsibilities : elem.skills;

        return (
          <div key={index} className="experience-unit">
            <h3 className="experience-title">{title}</h3>
            <p className="experience-institution">
                <a href={url} target='_blank'>{institution}</a>, 
                {/* country - shortcut and icon for location */}
              <span className="experience-location"> {location}, {country}</span>
            </p> 
          
              {/* icon  for calendar? */}
              <span className="experience-date">{formatDate(start)} - {end ? formatDate(end) : "Ongoing"}</span>
              {/* fields */}
              <ul>
              {fields.map((field, indexField) => {
                return( <li key={indexField}>{field}</li> ) 
              })}
              </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Experience;




//read more;