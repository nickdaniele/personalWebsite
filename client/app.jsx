import React from 'react';
import ReactDOM from 'react-dom';

import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import Introduction from './components/introduction/introduction';
import Projects from './components/projects/projects';
import Bookshelf from './components/bookshelf/bookshelf';
import Contact from './components/contact/contact';
// import MainCSS from 'css!./main.css'

const App = () => (
  <div>
    <Introduction />
    <Projects />
    <Bookshelf />
    <Contact />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
