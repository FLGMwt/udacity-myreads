import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import Book from '../Book';

describe('Book', () => {
  it('should render book details', () => {
    const testBook = {
      title: 'My Title',
      authors: 'Tes Tauthor',
      imageLinks: {
        thumbnail: 'TestUrl',
      },
    };

    const sut = shallow(<Book book={testBook} />);

    const title = sut.find('.book-title').children().text();
    expect(title).to.equal(testBook.title);

    const authors = sut.find('.book-authors').children().text();
    expect(authors).to.equal(testBook.authors);

    const style = sut.find('.book-cover').prop('style');
    expect(style.backgroundImage).to.contain(testBook.imageLinks.thumbnail);
  });

  it('should render a ShelfChanger', () => {
    const props = {
      book: {
        shelf: 'read',
        imageLinks: {},
      },
      onShelfChange: spy(),
    };

    const sut = shallow(<Book {...props} />);

    const shelfChanger = sut.find('ShelfChanger');
    expect(shelfChanger).to.have.prop('shelf', props.book.shelf);
    expect(shelfChanger).to.have.prop('onShelfChange', props.onShelfChange);
  });
});
