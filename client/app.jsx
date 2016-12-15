import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './components/introduction/introduction';
import Projects from './components/projects/projects';
import Bookshelf from './components/bookshelf/bookshelf';
import Contact from './components/contact/contact';

const App = () => (
  <div>
    <Introduction />
    <Projects />
    <Bookshelf />
    <Contact />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
