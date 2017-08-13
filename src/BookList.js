import React, { Component } from 'react';

const Book = ({book}) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.coverImageUrl})` }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  </li>
);

const BookSection = ({books, status}) => (
  <ol className="books-grid">
    {books
      .filter(book => book.status === status)
      .map(book => <Book key={book.title} book={book} />)
    }
  </ol>
);

export default class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <BookSection status='currentlyReading' books={books} />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <BookSection status='wantToRead' books={books} />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <BookSection status='read' books={books} />
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => {}}>Add a book</a>
      </div>
    </div>
    );
  }
}
