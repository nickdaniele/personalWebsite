import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ProjectData from '../../../data/projectData';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectdata: ProjectData.projects };
  }

  render() {
    // Creating jsx elements for each project
    const projects = [];

    this.state.projectdata.forEach((project, index) => {
      projects.push(
        <div className="project" key={index}>
          <Grid>
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
          </Grid>
        </div>,
      );
    });

    return (
      <div>
        {projects}
      </div>
    );
  }
}

module.exports = Projects;
