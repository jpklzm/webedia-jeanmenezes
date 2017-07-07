import React from 'react';
import renderer from 'react-test-renderer';

import Blog from './Blog';

test('Snapshot', () => {
  const component = renderer.create(<Blog />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
