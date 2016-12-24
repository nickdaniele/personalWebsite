import React from 'react';

import Books from './books';
import BooksCSS from './books.css';


const BookSection = () => (
  <div className="odd">
    <div className="header">
      <h1 className="title">{'Bookshelf'}</h1>
      <p>{'Below is a list of books that challenged my thinking or deeply influenced my views on Technology and Business.'}</p>
    </div>
    <Books />
  </div>
);

module.exports = BookSection;
