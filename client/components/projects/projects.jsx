import React from 'react';

import Project from './project';
import ProjectsCSS from './projects.css';


const Projects = () => (
  <div className="even">
    <div className="header">
      <h1 className="title">{'Projects'}</h1>
    </div>
    <Project />
  </div>
);

module.exports = Projects;
