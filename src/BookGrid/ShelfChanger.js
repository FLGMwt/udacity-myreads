import React from 'react';

const shelfOptions = [
  { value: 'currentlyReading', label: 'Currently Reading'},
  { value: 'wantToRead', label: 'Want to Read'},
  { value: 'read', label: 'Read'},
  { value: 'none', label: 'None'},
];

const ShelfChanger = ({shelf, onShelfChange}) => (
  <div className='book-shelf-changer'>
    <select value={shelf} onChange={onShelfChange}>
      <option value='none' disabled>Move to...</option>
      {shelfOptions.map(option =>
        <option key={option.value} value={option.value}>{option.label}</option>
      )}
    </select>
  </div>
);

export default ShelfChanger;
