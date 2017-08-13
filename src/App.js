import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import SearchPage from './SearchPage';

class BooksApp extends Component {
  state = {
    books: null,
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
          <BookList books={books} />
        } />
        <Route path='/search' render={() =>
          <SearchPage books={books} onSearchInputChange={() => {}} />
        } />
      </div>
    );
  }
}

export default BooksApp;
