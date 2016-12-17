import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
          <div className="projects">
            <a href="http://jackwelpott.com/">
              <img src="images/jackwelpott.jpg" className="img-responsive" alt="Responsive" />
              <div className="projectInfo">
                <p>{'Photography Website'}<br />{'Languages: HTML, CSS, Javascript, PHP'}</p>
              </div>
            </a>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Grid>
  </div>
);

module.exports = Projects;
