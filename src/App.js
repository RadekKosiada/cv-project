import React from 'react';
import './App.css';

// Components
import Experience from './components/Experience';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Strenghts from './components/Strengths';

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

let edu = education;

function App() {
  return (
    <div className="App">
      <Header />

      <About />

      <Skills {...skills} />

      <Strenghts  {...strenghts}/>

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
