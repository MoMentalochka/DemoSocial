import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let FriendsElement =
    props.FriendsData.map(p => <Friend message={p.message} id={p.id} name={p.name} second__name={p.second__name} avatar={p.avatar} />);


    return(

    <div className={styles.friends}>
   
            {FriendsElement}
    </div>)
}
export default Friends;