import React from 'react';

import Menu from '../home/menu/Menu';

import styles from './styles.scss';

const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.h1}>Um site do webedia group</h1>
    <Menu />
  </div>
);

export default Home;
