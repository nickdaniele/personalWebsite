import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Project from './project';
import ProjectsCSS from './projects.css';


const Projects = () => (
  <div className="even">
    <div className="header">
      <h1 className="title">{'Projects'}</h1>
    </div>
    <Grid>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Project />
        </Col>
        <Col md={1}></Col>
      </Row>
    </Grid>
  </div>
);

module.exports = Projects;
