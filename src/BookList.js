import React, { Component } from 'react';
import BookGrid from './BookGrid';
import { Link } from 'react-router-dom';

const FilteredBookGrid = ({books, statusFilter}) => {
  const filteredBooks = books.filter(book => book.shelf === statusFilter);
  return <BookGrid books={filteredBooks} />;
}

export default class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Currently Reading</h2>
            <div className='bookshelf-books'>
              <FilteredBookGrid statusFilter='currentlyReading' books={books} />
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Want to Read</h2>
            <div className='bookshelf-books'>
              <FilteredBookGrid statusFilter='wantToRead' books={books} />
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Read</h2>
            <div className='bookshelf-books'>
              <FilteredBookGrid statusFilter='read' books={books} />
            </div>
          </div>
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>Go to Search</Link>
      </div>
    </div>
    );
  }
}
