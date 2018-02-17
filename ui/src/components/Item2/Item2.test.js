import React from 'react';
import { render } from 'enzyme';
import  Item2 from '.';

it('Should render Item2 component with correct parameterized text', () => {
  const itemMatch = {
    params: {
      slug: 'schwarmerei',
    },
  };
  expect(render(<Item2 match={itemMatch} />).find('h3').text()).
    toBe('Hello, this is second page with slug: schwarmerei');
});
