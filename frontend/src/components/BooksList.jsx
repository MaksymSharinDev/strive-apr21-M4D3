import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";

class BookList extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          books.map((x) => (
          <Col xs={3}>
            <SingleBook book={x} />
          </Col>
          )
        </Row>
      </Container>
    );
  }
}

export default BookList;
