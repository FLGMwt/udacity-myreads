import React, { Component } from 'react';
import BookGrid from './BookGrid';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

export const FilteredBookGrid = ({books, shelfFilter, onBookShelfChange}) => {
  const filteredBooks = books.filter(book => book.shelf === shelfFilter);
  return <BookGrid books={filteredBooks} onBookShelfChange={onBookShelfChange} />;
};

export default class BookList extends Component {

  state = {
    books: [],
  }

  componentDidMount() {
    this.getAllBooks();
  }

  handleBookShelfChange = (book, shelfUpdateEvent) => {
    const shelf = shelfUpdateEvent.target.value;
    if (book.shelf === shelf) return;

    BooksAPI
      .update({id: book.id}, shelf)
      .then(this.getAllBooks);
  }

  getAllBooks = () => {
    BooksAPI
      .getAll()
      .then(books => this.setState({books}));
  }

  render() {
    const {books} = this.state;
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
              <FilteredBookGrid
                shelfFilter='currentlyReading'
                books={books}
                onBookShelfChange={this.handleBookShelfChange}
                />
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Want to Read</h2>
            <div className='bookshelf-books'>
              <FilteredBookGrid
                shelfFilter='wantToRead'
                books={books}
                onBookShelfChange={this.handleBookShelfChange}
                />
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Read</h2>
            <div className='bookshelf-books'>
              <FilteredBookGrid
                shelfFilter='read'
                books={books}
                onBookShelfChange={this.handleBookShelfChange}
                />
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
