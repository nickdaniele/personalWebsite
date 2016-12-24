import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import SiteData from '../../../data/siteData';


class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: SiteData.books };
  }

  render() {
    // Creating jsx elements for each book
    const books = [];

    this.state.books.forEach((book, index) => {
      books.push(
        <div className="book" key={index}>
          <Col md={4}>
            <img src={book.image} className="img-responsive center-Block" alt="Responsive" />
            <div className="bookInfo text-center">
              <p>{book.synopsis}</p>
            </div>
          </Col>
        </div>,
      );
    });

    return (
      <div>
        <Grid>
          <Row>
            {books}
          </Row>
        </Grid>
      </div>
    );
  }
}

module.exports = Books;
