import React from 'react';
import styles from './Nav.module.css';

const Nav= () => { 
    return <div className={styles.nav}>
    <ul>
        <li>
        <a href="#Profile">
        <div className={styles.item}>
          Profile
        </div>
        </a>
        </li>

        <li>
        <a href="#Messages">
        <div className={styles.item}>
          Messages
        </div>
        </a>
        </li>

        <li>
        <a href="#News">
        <div className={styles.item}>
          News
        </div>
        </a>
        </li>

        <li>
        <a href="#Music">
        <div className={styles.item}>
          Music
        </div>
        </a>
        </li>
    </ul>
    </div>
}
export default Nav;
