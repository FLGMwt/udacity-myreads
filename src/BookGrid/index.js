import React from 'react';
import Book from './Book';

const BookGrid = ({books, statusFilter}) => (
  <ol className="books-grid">
    {books
      .filter(book => statusFilter === undefined || book.status === statusFilter)
      .map(book => <Book key={book.title} book={book} />)
    }
  </ol>
);

export default BookGrid;
