import React from 'react';

import Menu from './menu/Menu';
import Blog from './blog/Blog';

import styles from './styles.scss';

const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.h1}>Um site do <span className={styles.logo}><strong>web</strong>edia</span><span className={styles.tm}>™</span> group</h1>
    <Menu />
    <Blog />
  </div>
);

export default Home;
