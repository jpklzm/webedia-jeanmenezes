import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('Snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
