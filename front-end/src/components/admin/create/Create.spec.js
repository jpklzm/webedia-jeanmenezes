import React from 'react';
import renderer from 'react-test-renderer';

import Create from './Create';

test('Snapshot', () => {
  const component = renderer.create(<Create />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
