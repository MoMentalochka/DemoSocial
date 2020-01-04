import React from 'react';
import styles from './Avatar.module.css';
import UserPhoto from '../../../../Img/User.jpg' 
const Avatar = (props) =>{
    return <div className={styles.avatar}>
                   <img src={props.avatar === null ? UserPhoto : props.avatar } alt=""/>
            </div>
            
}
export default Avatar;