import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={styles.friend}>
            <div className={styles.avatar}><img src={props.avatar} alt="avatar" /> </div>
            <div className={styles.name}>{props.name}</div>
        </div>)
}
export default Friend;