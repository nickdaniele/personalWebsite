import React from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import IntroCSS from './intro.css';

const IntroSection = () => (
  <div className="odd">
    <div className="header">
      <h1 className="title">{'Nick Daniele'}</h1>
      <Button id="menu"><Glyphicon glyph="menu-hamburger" /></Button>
    </div>
    <Grid>
      <Row>
        <Col md={1} sm={1}></Col>
        <Col md={10} sm={10}>
          <p>{'The mindset of the tech industry mirrors my own beliefs, iterate, refactor, improve. I value the process of creating and software development satisfies my need to bring structure to otherwise complex problems. My experience as both a software developer and project manager has given me the ability to approach application development a conceptual, high level as well as a detailed, functional viewpoint.'}</p>
          <p>{'I enjoy working with javascript because of the active community. There is always a new technology which I can leverage to make my ideas a reality.'}</p>
        </Col>
        <Col md={1} sm={10}></Col>
      </Row>
    </Grid>
  </div>
);

module.exports = IntroSection;
