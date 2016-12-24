import React from 'react';

import Projects from './projects';
import ProjectsCSS from './projects.css';


const ProjectSection = () => (
  <div className="even">
    <div className="header">
      <h1 className="title">{'Projects'}</h1>
    </div>
    <Projects />
  </div>
);

module.exports = ProjectSection;
