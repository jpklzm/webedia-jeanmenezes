import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const FeaturedPost = ({ post }) => {
  return (
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
  );
};

export const Post = ({ post }) => {
  return (
    <div className="col-sm-6">
      <div className={styles.card}>
        <div className={styles.container}>
          <h1 className={styles.title}>{post.title}</h1>
          <img src={post.imageUrl} className={styles.image} />
        </div>
      </div>
    </div>
  );
};

const postPropTypes = {
  post: PropTypes.object,
};

FeaturedPost.propTypes = postPropTypes;
Post.propTypes = postPropTypes;
