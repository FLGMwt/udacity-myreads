import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import ShelfChanger from '../ShelfChanger';

describe.only('ShelfChanger', () => {
  it('should render a select with the provided shelf and change handler', () => {
    const props = {
      shelf: 'wantToRead',
      onShelfChange: spy(),
    };

    const sut = shallow(<ShelfChanger {...props} />);

    const select = sut.find('select');
    expect(select).to.have.prop('shelf', 'wantToRead');
    expect(select).to.have.prop('onShelfChange', props.onShelfChange);
  });
});
