import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

export const FeaturedPost = ({ post }) => {
  // Fullsized post with all data.
  return (
    <Link to={'/blog/post/' + post._id}>
      <div className={styles.featuredCard}>
        <div className={styles.featuredContainer}>
          <h1 className={styles.featuredTitle}>{post.title}</h1>
          <h2 className={styles.description}>{post.description}</h2>
          <img src={post.imageUrl} className={styles.featuredImage} />
          <div className={styles.contentArea}>
            <hr className={styles.hr} />
            <h1 className={styles.subTitle}>{post.subTitle}</h1>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const Post = ({ post }) => {
  // Small post with reduced data for two columns layout
  return (
    <div className="col-sm-6">
      <Link to={'/blog/post/' + post._id}>
        <div className={styles.card}>
          <div className={styles.container}>
            <h1 className={styles.title}>{post.title}</h1>
            <img src={post.imageUrl} className={styles.image} />
          </div>
        </div>
      </Link>
    </div>
  );
};

const postPropTypes = {
  post: PropTypes.object,
};

FeaturedPost.propTypes = postPropTypes;
Post.propTypes = postPropTypes;
