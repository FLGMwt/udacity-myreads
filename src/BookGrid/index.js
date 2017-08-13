import React from 'react';
import Book from './Book';

const BookGrid = ({books}) => (
  <ol className="books-grid">
    {books.map(book =>
      <Book key={book.title} book={book} />
    )}
  </ol>
);

export default BookGrid;
