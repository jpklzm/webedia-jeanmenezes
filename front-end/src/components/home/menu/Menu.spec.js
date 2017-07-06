import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './Menu';

test('Snapshot', () => {
  const component = renderer.create(<Menu />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
