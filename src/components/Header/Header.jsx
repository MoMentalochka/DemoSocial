import React from 'react';
import styles from './Header.module.css';

const Header = (props) => { 

     
    return <header className={styles.header}>
                <div className={styles.header__logo}> Logo </div>
                
                <div className={styles.header_login}> {props.login===null ? "Login" : props.login} </div>
                
            </header>
}
export default Header;
