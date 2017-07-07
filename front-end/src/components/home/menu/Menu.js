import React, { Component } from 'react';

import styles from './styles.scss';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <ul className="nav nav-justified">
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
