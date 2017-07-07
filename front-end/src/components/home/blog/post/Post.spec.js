import React from 'react';
import renderer from 'react-test-renderer';

import { Post } from './Post';

const postMock = {
  title: 'title',
  subTitle: 'subTitle',
  description: 'description',
  content: 'content',
  imageUrl: 'http://www.fragil.org/wp-content/themes/courage/assets/images/placeholder_featured_image.svg',
};

test('Snapshot', () => {
  const component = renderer.create(<Post post={postMock} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
