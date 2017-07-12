import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Admin from './Admin';

test('Snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Admin />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
