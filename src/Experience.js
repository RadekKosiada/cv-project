import React from 'react';
import './App.css';


function Experience(props) {
  console.log(props.mainData)

  
  return (
    <div className={`experience ${props.className}`}>
      <h1 className="header-experience">{props.header}</h1>

      {props.mainData.map((elem, index) => {
        let title = elem.jobTitle ? elem.jobTitle : elem.degree;
        let institution = elem.companyName ? elem.companyName : elem.institution;
        let location = elem.location;
        let country = elem.country;
        let url = elem.url;
        let start = elem.startDate;
        let end = elem.endDate;
        let fields = elem.responsibilities ? elem.responsibilities : elem.skills;

        return (
          <div key={index} className="experience-unit">
            <h3 className="experience-title">{title}</h3>
            <p className="experience-institution">
                <a href={url} target='_blank'>{institution}</a>, 
                {/* country - shortcut and icon for location */}
              <span className="experience-location"> {location}, {country}</span>
            </p> 
          
              {/* icon  for calendar? */}
              <span className="experience-date">{editDate(start)} - {end ? editDate(end) : "Ongoing"}</span>
              {/* fields */}
              <ul>
              {fields.map((field, indexField) => {
                return( <li key={`${institution}-${indexField}`}>{field}</li> ) 
              })}
              </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Experience;

function editDate(dateString) {
  const optionsForDate = { year: 'numeric', month: 'short'};
  const lang = "en-EN"
  return new Date(dateString).toLocaleDateString(lang, optionsForDate)
}


//read more;