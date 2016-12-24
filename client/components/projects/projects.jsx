import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import SiteData from '../../../data/siteData';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: SiteData.projects };
  }

  render() {
    // Creating jsx elements for each project
    const projects = [];

    this.state.projects.forEach((project, index) => {
      projects.push(
        <div className="project" key={index}>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <a href={project.href}>
                <img src={project.image} className="img-responsive" alt="Responsive" />
                <div className="projectInfo">
                  <p>{project.title}<br />{project.stack}</p>
                </div>
              </a>
            </Col>
            <Col md={1}></Col>
          </Row>
        </div>,
      );
    });

    return (
      <div>
        <Grid>
          {projects}
        </Grid>
      </div>
    );
  }
}

module.exports = Projects;
