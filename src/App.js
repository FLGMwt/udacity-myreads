import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import SearchPage from './SearchPage';
import _ from 'lodash';

const BooksApp = () => (
  <div className='app'>
    <Route exact path='/' component={BookList}/>
    <Route path='/search' component={SearchPage}/>
  </div>
);

export default BooksApp;
