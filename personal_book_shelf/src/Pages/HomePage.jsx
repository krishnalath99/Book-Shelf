import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import BooksCard from '../Components/BooksCard';
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap';

const HomePage = () => {

  const [query, setQuery] = useState('');

  const [books, setBooks] = useState([]);

  const searchHandler = async (event) => {
    event.preventDefault();
    const value = event.target.value
    setQuery(value);

    if (value.length > 2) {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${value}&limit=10&page=1`);
        setBooks(response.data.docs);
    }
    else{
        setBooks([]);
    }
  }

  return (
    <Container>
        <Link to='/bookshelf' className="btn btn-secondary my-3">Go To My Book-Shelf</Link>
        <InputGroup className='mb-3'>
            <FormControl
                placeholder='Enter the Book....'
                aria-label='Enter the Book'
                value={query}
                onChange={searchHandler}
            />
        </InputGroup>
        <Row>
            {books.map(book => (
                <BooksCard key={book.key} book={book} />
            ))}
        </Row>
    </Container>
  );
};

export default HomePage;