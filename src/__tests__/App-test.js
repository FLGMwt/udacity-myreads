import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './../App';

import BookList from './../BookList';
import SearchPage from './../SearchPage';

describe('App', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  describe('routes', () => {
    it(`should render BookList as a route with exactly /`, () => {
      const sut =shallow(<App />);

      const rootRoute = sut
        .find('Route')
        .filterWhere(route => route.prop('path') === '/');

      expect(rootRoute).to.have.prop('exact', true);
      expect(rootRoute).to.have.prop('component', BookList);
    });

    it(`should render SearchPage with a route of /search`, () => {
      const sut =shallow(<App />);


      const searchRoute = sut
      .find('Route')
      .filterWhere(route => route.prop('path') === '/search');

      expect(searchRoute).not.to.have.prop('exact');
      expect(searchRoute).to.have.prop('component', SearchPage);
    });

  });

});
