import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import SearchPage from './SearchPage';
import _ from 'lodash';

class BooksApp extends Component {
  state = {
    books: null,
  }

  onBookShelfChange = (book, shelfUpdateEvent) => {
    const shelf = shelfUpdateEvent.target.value;
    if (book.shelf == shelf) return;

    const updatedBooks = this.state.books.map(existingBook =>
      existingBook.id === book.id ?
        _.assign({}, existingBook, {shelf}) :
        existingBook
    );
    this.setState({
      books: updatedBooks,
    })

  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books,
      })
    });
  }

  render() {
    const { books } = this.state;
    if (!books) return null;
    return (
      <div className='app'>
        <Route exact path='/' render={() =>
          <BookList books={books} onBookShelfChange={this.onBookShelfChange}/>
        } />
        <Route path='/search' render={() =>
          <SearchPage
            books={books}
            onSearchInputChange={() => {}}
            onBookShelfChange={this.onBookShelfChange}
            />
        } />
      </div>
    );
  }
}

export default BooksApp;
