import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Introduction from './components/introduction/introduction';
import Projects from './components/projects/projects';
import Bookshelf from './components/bookshelf/bookshelf';
import Contact from './components/contact/contact';

import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import MainCSS from './main.css';

const App = () => (
  <div>
    <Introduction />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
