import React from 'react';
import './App.css';

// Components
import Experience from './components/Experience';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Strenghts from './components/Strengths';
import Picture from './components/Picture';
import Languages from './components/Languages';

// Data
//
import education from './json-files/education.json';
import work from './json-files/work.json';
//
import languages from './json-files/languages.json';
import strenghts from './json-files/strenghts.json';
//
import technologies from './json-files/technologies.json';
//
import projects from './json-files/projects.json';

let edu = education;

function App() {
  return (
    <div className="App">
      <Header />
      <Picture />

      <About />

      <Technologies {...technologies} />

      {/* <Strenghts  
        data={strenghts}
        header = ""
        /> */}

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

      <Languages />

    </div>
  );
}

export default App;
