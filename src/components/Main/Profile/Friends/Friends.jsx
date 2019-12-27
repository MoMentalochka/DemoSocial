import React from 'react';
import styles from './Friends.module.css';

const Friends = (props) => {
    return(

    <div className={styles.friends}>
            {props.FriendsElement}
    </div>)
}
export default Friends;