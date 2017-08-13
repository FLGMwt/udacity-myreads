import React from 'react';

const shelfOptions = [
  { value: 'currentlyReading', label: 'Currently Reading'},
  { value: 'wantToRead', label: 'Want to Read'},
  { value: 'read', label: 'Read'},
  { value: 'none', label: 'None'},
];

const Book = ({book, onShelfChange}) => (
  <li>
    <div className='book'>
      <div className='book-top'>
        <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
        <div className='book-shelf-changer'>
          <select value={book.shelf} onChange={onShelfChange}>
            <option value='none' disabled>Move to...</option>
            {shelfOptions.map(option =>
              <option key={option.value} value={option.value}>{option.label}</option>
            )}
          </select>
        </div>
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>{book.authors}</div>
    </div>
  </li>
);

export default Book;
