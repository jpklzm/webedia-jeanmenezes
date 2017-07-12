import React from 'react';

import Menu from './menu/Menu';
import Blog from './blog/Blog';
import PushMenu from './pushMenu/PushMenu';

import styles from './styles.scss';

const Home = () => (
  <div className={styles.container}>
    {window.innerWidth <= 879 // Mobile menu
      ? <PushMenu />
      : null}
    <div id="page-wrap">
      <h1 className={styles.h1}>
        Um site do
        <span className={styles.logo}> <strong>web</strong>edia</span><span className={styles.tm}>™</span> group
      </h1>
      {window.innerWidth >= 880 // Desktop menu
        ? <Menu />
        : null}
      <Blog />
    </div>
  </div>
);

export default Home;
