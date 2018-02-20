import React from 'react';
import { render } from 'enzyme';
import  Item3 from '.';

it('Should render Item3 component.', () => {
  expect(render(<Item3  />).find('h3').text()).
    toBe('loading...');
});
