import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import FilteredBookGrid from '../FilteredBookGrid';

describe('FilteredBookGrid', () => {
  it('should render a BookGrid with books filtered by shelf', () => {
    const props = {
      books: [
        {shelf: 'wanted'},
        {shelf: 'unwanted'},
      ],
      shelfFilter: 'wanted',
      onBookShelfChange: () => {},
    };

    const sut = shallow(<FilteredBookGrid {...props} />);

    const bookGrid = sut.find('BookGrid');
    const books = bookGrid.prop('books');
    expect(books.length).to.equal(1);
    expect(books[0].shelf).to.equal('wanted');

    expect(bookGrid).to.have.prop('onBookShelfChange', props.onBookShelfChange);
  });
});
