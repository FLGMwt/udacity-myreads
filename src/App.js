import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import SearchPage from './SearchPage';

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookList} />
        <Route path='/search' component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
