import React from 'react';
import renderer from 'react-test-renderer';

import Admin from './Admin';

test('Snapshot', () => {
  const component = renderer.create(<Admin />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
