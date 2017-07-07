import React, { Component } from 'react';

import { Post } from './post/Post';

// import styles from './styles.scss';

const postMock = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ligula ut sollicitudin imperdiet.',
  subTitle: 'Praesent lacinia eget tortor id rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  description: 'Aenean et dui molestie, bibendum ipsum id, lobortis ex. Maecenas fringilla leo nibh, vitae placerat leo malesuada sed. Cras pharetra urna vel turpis aliquam aliquet.',
  content: 'Integer felis ipsum, feugiat eget sagittis id, iaculis ut est. Morbi tristique mollis nulla sed eleifend. Aliquam pulvinar sem non dui volutpat imperdiet. Nullam fermentum, arcu non laoreet varius, mi mauris vulputate erat, vitae pharetra sapien augue sit amet ante. Donec vel condimentum libero, at pulvinar diam. Proin sed justo velit. Praesent tellus purus, congue tincidunt sapien ut, venenatis pharetra ligula.',
  imageUrl: 'http://www.fragil.org/wp-content/themes/courage/assets/images/placeholder_featured_image.svg',
};

class Blog extends Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <Post post={postMock} />
        </div>
      </section>
    );
  }
}

export default Blog;
