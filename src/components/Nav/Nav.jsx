import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => { 
    return <div className={styles.nav}>
    <ul>
        <li>
        <NavLink to="/profile" activeClassName={styles.active}>
        <div className={styles.item}>
          Profile
        </div>
        </NavLink>
        </li>

        <li>
        <NavLink to="/dialogs" activeClassName={styles.active}>
        <div className={styles.item}>
          Dialogs
        </div>
        </NavLink>
        </li>

        <li>
        <NavLink to="/users" activeClassName={styles.active}>
        <div className={styles.item}>
          Users
        </div>
        </NavLink>
        </li>

        <li>
        <NavLink to="/news" activeClassName={styles.active}>
        <div className={styles.item}>
          News
        </div>
        </NavLink>
        </li>

        <li>
        <NavLink to="/music" activeClassName={styles.active}>
        <div className={styles.item}>
          Music
        </div>
        </NavLink>
        </li>
        <li>
        <NavLink to="/settings" activeClassName={styles.active}>
        <div className={styles.item}>
          Settings
        </div>
        </NavLink>
        </li>
    </ul>
    </div>
}
export default Nav;
