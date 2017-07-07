import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const Post = ({ post }) => {
  return (
    <div className={styles.card}>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <img src={post.imageUrl} />
      <h1>{post.subTitle}</h1>
      <p>{post.content}</p>
    </div>
  );
};

const postPropTypes = {
  post: PropTypes.object,
};

Post.propTypes = postPropTypes;
