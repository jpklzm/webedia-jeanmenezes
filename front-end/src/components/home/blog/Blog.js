import React, { Component } from 'react';

import { get } from '../../../services/post';
import { FeaturedPost, Post } from './post/Post';

// import styles from './styles.scss';

const postMock = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ligula ut sollicitudin imperdiet.',
  subTitle: 'Praesent lacinia eget tortor id rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  description: 'Aenean et dui molestie, bibendum ipsum id, lobortis ex. Maecenas fringilla leo nibh, vitae placerat leo malesuada sed. Cras pharetra urna vel turpis aliquam aliquet.',
  content: 'Integer felis ipsum, feugiat eget sagittis id, iaculis ut est. Morbi tristique mollis nulla sed eleifend. Aliquam pulvinar sem non dui volutpat imperdiet. Nullam fermentum, arcu non laoreet varius, mi mauris vulputate erat, vitae pharetra sapien augue sit amet ante. Donec vel condimentum libero, at pulvinar diam. Proin sed justo velit. Praesent tellus purus, congue tincidunt sapien ut, venenatis pharetra ligula.',
  imageUrl: 'http://p8.storage.canalblog.com/88/05/1209379/103115257_o.jpg',
};

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      posts: [],
      shouldLoadMorePosts: true,
    };

    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    get().then(response => {
      this.setState({
        posts: this.state.posts.concat(response.data),
        loading: false,
      });
    });
  }

  render() {
    return (
      <section className="container" style={{ width: '80%' }}>
        <div className="row">
          {this.state.posts[this.state.posts.length - 1]
            ? <FeaturedPost post={this.state.posts[this.state.posts.length - 1]} />
            : null}
        </div>
        <div className="row">
          {this.state.posts.filter(p => p !== this.state.posts[this.state.posts.length - 1]).map((post, key) => (
            <div key={key}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Blog;
