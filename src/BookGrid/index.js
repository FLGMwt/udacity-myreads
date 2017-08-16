import React from 'react';
import Book from './Book';
import _ from 'lodash';

const BookGrid = ({books, onBookShelfChange}) => (
  <ol className='books-grid'>
    {books.map(book =>
      <Book
        key={book.id}
        book={book}
        onShelfChange={_.partial(onBookShelfChange, book)}
        />
    )}
  </ol>
);

export default BookGrid;
