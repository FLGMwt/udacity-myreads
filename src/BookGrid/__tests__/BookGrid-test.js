import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import BookGrid from '../index';

describe('BookGrid', () => {
  it('should render a Book for each book', () => {
    const props = {
      books: [
        {id: 1},
        {id: 2},
      ],
      onBookShelfChange: spy(),
    };

    const sut = shallow(<BookGrid {...props} />);

    const books = sut.find('Book');
    expect(books.length).to.equal(2);

    const firstBook = books.at(0);
    const testBook = props.books[0];
    expect(firstBook).to.have.prop('book', testBook);
    expect(firstBook.key()).to.equal('1');
  });
});
