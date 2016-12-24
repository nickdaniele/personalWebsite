import React from 'react';
import ReactDOM from 'react-dom';

import IntroSection from './components/introduction/introsection';
import ProjectSection from './components/projects/projectsection';
import BookSection from './components/bookshelf/booksection';
import Contact from './components/contact/contact';

import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import MainCSS from './main.css';

const App = () => (
  <div>
    <IntroSection />
    <ProjectSection />
    <BookSection />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
