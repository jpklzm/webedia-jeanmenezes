import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import PushMenu from './PushMenu';

test('Snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <PushMenu />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
