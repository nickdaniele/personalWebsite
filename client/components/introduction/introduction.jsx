import React from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import IntroductionCSS from './intro.css';

const Introduction = () => (
  <div className="odd">
    <div id="header">
      <h1 id="name">{'Nick Daniele'}</h1>
      <Button id="menu" bsSize="medium"><Glyphicon glyph="menu-hamburger" /></Button>
    </div>
    <Grid>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <p>{'The mindset of the tech industry mirrors my own beliefs, iterate, refactor, improve. I value the process of creating and software development satisfies my need to bring structure to otherwise complex problems. My experience as both a software developer and project manager has given me the ability to approach application development a conceptual, high level as well as a detailed, functional viewpoint.'}</p>
          <p>{'I enjoy working with javascript because of the active community. There is always a new technology which I can leverage to make my ideas a reality.'}</p>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Grid>
  </div>
);

module.exports = Introduction;
