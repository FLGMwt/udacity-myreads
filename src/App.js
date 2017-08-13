import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import SearchPage from './SearchPage';
import initialBooks from './StubData';

class BooksApp extends Component {
  state = {
    books: initialBooks,
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => <BookList books={books} />} />
        <Route path='/search' render={() => <SearchPage books={books} />} />
      </div>
    )
  }
}

export default BooksApp
