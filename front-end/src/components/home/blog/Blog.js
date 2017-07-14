import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { get, getOne } from '../../../services/post';
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
    if (this.props.postId) {
      getOne(this.props.postId).then(response => {
        this.setState({
          posts: this.state.posts.concat(response.data),
          loading: false,
        });
      });
    } else {
      get(this.props.page).then(response => {
        this.setState({
          posts: this.state.posts.concat(response.data),
          loading: false,
        });
      });
    }
  }

  render() {
    return (
      <section className="container" style={{ width: '80%' }}>
        {parseInt(this.props.page) > 1
          ? <button
              onClick={() => (window.location = 'http://localhost:4000/blog/page/' + (parseInt(this.props.page) - 1))}
            >
              Página Anterior
            </button>
          : null}
        {this.state.posts.length === 5
          ? <button
              onClick={() => (window.location = 'http://localhost:4000/blog/page/' + (parseInt(this.props.page) + 1))}
            >
              Próxima página
            </button>
          : null}
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

Blog.propTypes = {
  page: PropTypes.string,
  post: PropTypes.string,
};

export default Blog;
