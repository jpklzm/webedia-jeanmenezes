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
    get(1).then(response => {
      this.setState({
        posts: this.state.posts.concat(response.data),
        loading: false,
      });
    });
  }

  render() {
    return (
      <section className="container" style={{ width: '80%' }}>
        <article className="row">
          {this.state.posts[0] ? <FeaturedPost post={this.state.posts[0]} /> : null}
        </article>
        {window.innerWidth >= 880 // Desktop view with two columns of small posts
          ? <div className="row">
              {this.state.posts.filter(p => p !== this.state.posts[0]).map((post, key) => (
                <article key={key}>
                  <Post post={post} />
                </article>
              ))}
            </div>
          : // Mobile view with single column and fullsized posts
            <div className="row">
              {this.state.posts.filter(p => p !== this.state.posts[0]).map((post, key) => (
                <article key={key}>
                  <FeaturedPost post={post} />
                </article>
              ))}
            </div>}
      </section>
    );
  }
}

export default Blog;
