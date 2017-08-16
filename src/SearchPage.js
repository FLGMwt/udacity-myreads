import React, { Component } from 'react';
import BookGrid from './BookGrid';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {

  state = {
    books: [],
    searchText: '',
  }

  handleSearchInputChange = (inputChangeEvent) => {
    const searchText = inputChangeEvent.target.value;
    this.setState({
      searchText,
    });
    this.doSearch(searchText);
  }

  handleBookShelfChange = (book, shelfUpdateEvent) => {
    const shelf = shelfUpdateEvent.target.value;
    if (book.shelf === shelf) return;

    BooksAPI
      .update({id: book.id}, shelf)
      .then(() => this.doSearch(this.state.searchText));
  }

  doSearch = searchText => {
    BooksAPI.search(searchText).then(books => {
      this.setState({
        books: books.items ? books.items : [],
      });
    });
  }

  render() {
    const {books} = this.state;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
        <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input type='text' placeholder='Search by title or author' onChange={this.handleSearchInputChange} />
          </div>
        </div>
        <div className='search-books-results'>
          <BookGrid books={books} onBookShelfChange={this.handleBookShelfChange} />
        </div>
      </div>
    )
  }
}

export default SearchPage;
