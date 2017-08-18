import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI';
import FilteredBookGrid from './FilteredBookGrid';

const bookshelves = [
  {filter: 'currentlyReading', title: 'Currently Reading'},
  {filter: 'wantToRead', title: 'Want to Read'},
  {filter: 'read', title: 'Read'},
];

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
          {bookshelves.map(bookshelf => (
            <div className='bookshelf' key={bookshelf.filter} >
              <h2 className='bookshelf-title'>{bookshelf.title}</h2>
              <div className='bookshelf-books'>
                <FilteredBookGrid
                  shelfFilter={bookshelf.filter}
                  books={books}
                  onBookShelfChange={this.handleBookShelfChange}
                  />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>Go to Search</Link>
      </div>
    </div>
    );
  }
}
