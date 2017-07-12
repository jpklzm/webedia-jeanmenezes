import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Menu from './Menu';

test('Snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Menu />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
