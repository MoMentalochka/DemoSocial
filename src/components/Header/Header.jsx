import React from 'react';
import styles from './Header.module.css';
import { Redirect } from 'react-router-dom';

const Header = (props) => { 

    
    return <header className={styles.header}>
                <div className={styles.header__logo}> <div className = {styles.header__logo_img} ><img src="https://c7.uihere.com/icons/273/349/195/brand-brands-chrome-logo-logos-icon-c60121d44f11d9f6e6b3f0f5730fc9cf.png" alt=""/></div>Social-Demo</div>
                
                <div className={styles.header_login}> {props.Auth.login===null 
                ? <Redirect to='login'/> 
                : <div className = {styles.header_form}>  
                    <div className={styles.login}>{props.Auth.login} { (props.Auth.login && props.profilePage.ProfileData) && <img src={props.profilePage.ProfileData.photos.large} alt="ph" className={styles.photo}/>}</div> 
                    {props.Auth.login && <button className = {styles.button} onClick={()=>{props.LogoutThunk()}}> Logout</button>}
                 </div> } 
                 </div>
                
            </header>
}
export default Header;
