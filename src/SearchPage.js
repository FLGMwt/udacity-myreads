import React from 'react';
import BookGrid from './BookGrid';
import { Link } from 'react-router-dom';

const SearchPage = ({books, onSearchInputChange, onBookShelfChange}) => (
  <div className='search-books'>
    <div className='search-books-bar'>
    <Link to='/' className='close-search'>Close</Link>
      <div className='search-books-input-wrapper'>
        <input type='text' placeholder='Search by title or author' onChange={onSearchInputChange} />
      </div>
    </div>
    <div className='search-books-results'>
      <BookGrid books={books} onBookShelfChange={onBookShelfChange} />
    </div>
  </div>
);

export default SearchPage;
