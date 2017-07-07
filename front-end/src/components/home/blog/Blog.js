import React, { Component } from 'react';

import { Post } from './post/Post';

// import styles from './styles.scss';

const postMock = {
  title: 'title',
  subTitle: 'subTitle',
  description: 'description',
  content: 'content',
  imageUrl: 'http://www.fragil.org/wp-content/themes/courage/assets/images/placeholder_featured_image.svg',
};

class Blog extends Component {
  render() {
    return (
      <section className="container">
        <Post post={postMock} />
      </section>
    );
  }
}

export default Blog;
