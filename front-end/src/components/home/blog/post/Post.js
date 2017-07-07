import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const Post = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <h2>{post.description}</h2>
        <img src={post.imageUrl} className={styles.image} />
        <div className={styles.contentArea}>
          <h1 className={styles.subTitle}>{post.subTitle}</h1>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

const postPropTypes = {
  post: PropTypes.object,
};

Post.propTypes = postPropTypes;
