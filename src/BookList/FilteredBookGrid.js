import React, { Component } from 'react';
import BookGrid from './../BookGrid';

const FilteredBookGrid = ({books, shelfFilter, onBookShelfChange}) => {
  const filteredBooks = books.filter(book => book.shelf === shelfFilter);
  return (
    <BookGrid
      books={filteredBooks}
      onBookShelfChange={onBookShelfChange} />
  );
};

export default FilteredBookGrid;
