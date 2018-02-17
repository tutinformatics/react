import React from 'react';
import { shallow } from 'enzyme';
import  Item1 from './Item1';

it('Should render Item1 with correct text', () => {
    expect(shallow(<Item1 />).find('h3').text()).
      toBe('Hello, this is first page.');
  }
);
