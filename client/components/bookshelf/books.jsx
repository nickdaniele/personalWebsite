import React from 'react';
import { Grid, Row, Col, bsClass } from 'react-bootstrap';

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
          <Col md={4} sm={12} xs={12}>
            <div className="bookWrapper">
              <img src={book.image} className="img-responsive center-block" alt="Responsive" />
              <p>{book.synopsis}</p>
            </div>
          </Col>
        </div>,
      );
    });

    return (
      <div>
        <Grid>
          <Row className="text-center">
            {books}
          </Row>
        </Grid>
      </div>
    );
  }
}

module.exports = Books;
