import React, { useEffect, useState } from 'react'
import {Button, Card, Col} from "react-bootstrap"

const BooksCard = ({ book }) => {

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('book_shelf')) || [];
    const bookExists = storedBooks.some(storedBook => storedBook.key === book.key);
    if (bookExists) {
      setIsAdded(true);
    }
  }, [book.key]);

  const clickHandler = () => {
    const storedBooks = JSON.parse(localStorage.getItem('book_shelf')) || [];
    const newBooks = [...storedBooks, book]
    localStorage.setItem('book_shelf', JSON.stringify(newBooks));
    setIsAdded(true);
  };

  return (
    <Col md={4} className='mb-4'>
        <Card>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                    {book.author_name?.join(', ')}
                </Card.Subtitle>
                <Button variant='primary' onClick={clickHandler} disabled={isAdded}>
                    {isAdded ? "Added" : "Add To Book-Shelf"}
                </Button>
            </Card.Body>
        </Card>
    </Col>
  );
};

export default BooksCard;