import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ProjectData from '../../../data/projectData';

// Need to break out hover into own function!!! Before Jobs Compiled!!
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectdata: ProjectData.projects, hover: false };

    // binding functions to handle mouse to instance
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ hover: true });
  }

  mouseOut() {
    this.setState({ hover: false });
  }

  render() {
    // Creating jsx elements for each project
    const projects = [];
    let style = { display: 'inline-block' };

    this.state.projectdata.forEach((project) => {
      projects.push(
        <div className="project" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Grid>
            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <a href={project.href}>
                  <img src={project.image} className="img-responsive" alt="Responsive" />
                  <div className="projectInfo" style={style}>
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

    if (this.state.hover) {
      // set display to inline-block
      style = { display: 'inline-block' };
    }

    return (
      <div>
        {projects}
      </div>
    );
  }
}

module.exports = Project;
