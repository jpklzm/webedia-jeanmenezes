import React from 'react';

import Menu from '../home/menu/Menu';
import Create from './create/Create';
import PushMenu from '../home/pushMenu/PushMenu';

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
      <div className="container">
        <Create />
      </div>
    </div>
  </div>
);

export default Home;
