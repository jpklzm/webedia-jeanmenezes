import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const menuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    left: '36px',
    top: '36px',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#f0f0f0',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#f0f0f0',
  },
  bmItemList: {
    color: '#fe783b',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

class PushMenu extends Component {
  render() {
    return (
      <Menu styles={menuStyles} pageWrapId={'page-wrap'} customBurgerIcon={<img src="./src/assets/menu.svg" />}>
        <Link to="/" className={styles.menuText}>Home</Link>
        <a href="#" className={styles.menuText}>Lorem Ipsum</a>
        <a href="#" className={styles.menuText}>Lorem Ipsum</a>
        <a href="#" className={styles.menuText}>Lorem Ipsum</a>
        <a href="#" className={styles.menuText}>Lorem Ipsum</a>
        <a href="#" className={styles.menuText}>Lorem Ipsum</a>
        <a href="#" className={styles.menuText}>Lorem Ipsum</a>
        <a href="#" className={styles.menuText}>Lorem Ipsum</a>
        <a href="#" className={styles.menuText}>Lorem Ipsum</a>
        <Link to="/admin" className={styles.menuText}>Admin</Link>
      </Menu>
    );
  }
}

export default PushMenu;
