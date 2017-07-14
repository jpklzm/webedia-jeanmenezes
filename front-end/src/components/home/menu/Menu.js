import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

// Desktop Menu

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className={window.innerWidth >= 992 ? 'container' : styles.container}>
          <ul className="nav nav-justified">
            <li className={styles.menuItem}><Link to="/blog/1" className={styles.menuText}>Home</Link></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuText}>Lorem Ipsum</a></li>
            <li className={styles.menuItem}><Link to="/admin" className={styles.menuText}>Admin</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
