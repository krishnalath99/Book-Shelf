import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const BookShelfPage = () => {

  const [bookShelf, setBookShelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('book_shelf')) || [];
    setBookShelf(storedBooks);
  }, []);

  return (
    <Container>
      <h2 className="my-3">My Bookshelf</h2>
      <Row>
        {bookShelf.map((book, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {book.author_name?.join(', ')}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookShelfPage;