import React, { Component } from 'react';

import { get } from '../../../services/post';
import { FeaturedPost, Post } from './post/Post';

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
        {window.innerWidth >= 880
          ? <div className="row">
              {this.state.posts.filter(p => p !== this.state.posts[this.state.posts.length - 1]).map((post, key) => (
                <div key={key}>
                  <Post post={post} />
                </div>
              ))}
            </div>
          : <div className="row">
              {this.state.posts.filter(p => p !== this.state.posts[this.state.posts.length - 1]).map((post, key) => (
                <div key={key}>
                  <FeaturedPost post={post} />
                </div>
              ))}
            </div>}
      </section>
    );
  }
}

export default Blog;
