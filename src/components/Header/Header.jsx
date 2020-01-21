import React from 'react';
import styles from './Header.module.css';
import { Redirect } from 'react-router-dom';

const Header = (props) => { 

     
    return <header className={styles.header}>
                <div className={styles.header__logo}> Logo </div>
                
                <div className={styles.header_login}> {props.login===null ? <Redirect to='login'/> : <div className = {styles.header_form}>  <div className={styles.login}>{props.login}</div> {props.login && <button className = {styles.button} onClick={()=>{props.LogoutThunk()}}> Logout</button>} </div> } </div>
                
            </header>
}
export default Header;
