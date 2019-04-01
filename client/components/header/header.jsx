/* eslint-disable space-infix-ops */
import React from 'react';
import styles from './Header.css';

const Header = (props) => {
  return (
    <div className={styles.header} data-test='headerComponent'>
      <h2>About</h2>
    </div>
  );
};

export default Header;