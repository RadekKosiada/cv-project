import React from 'react';
import './App.css';

// Data
//
import education from './json-files/education.json';
import work from './json-files/work.json';
//
import languages from './json-files/languages.json';
import strenghts from './json-files/strenghts.json';
//
import skills from './json-files/skills.json';
//
import projects from './json-files/projects.json';

// Components
import Experience from './Experience';


let edu = education;
console.log(edu);

function App() {
  return (
    <div className="App">
      <Experience
        header = "Work experience"
        className="work"
        mainData = {work}
      />

      <Experience
        header = "Education"
        className="education"
        mainData = {education}

      />

    </div>
  );
}

export default App;
