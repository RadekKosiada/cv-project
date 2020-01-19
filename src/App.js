import React from 'react';
import './App.css';

// Components
import Experience from './components/Experience';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Skills from './components/Skills';
import Picture from './components/Picture';
import Languages from './components/Languages';

// Data
//
import education from './json-files/education.json';
import work from './json-files/work.json';
//
import languages from './json-files/languages.json';
import strengths from './json-files/strengths.json';
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

      <Skills  {...strengths}
        
        />

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
