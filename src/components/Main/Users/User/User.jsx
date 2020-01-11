import React from 'react';
import styles from './User.module.css'
import { NavLink } from 'react-router-dom';
let User = (props) => {


  
    let t = (props.followed !== true) ? 'Follow' : 'Unfollow';
    let a = (props.followed === true) ? () => {props.unfollowThunk(props.id, props.name)} : () => {props.followThunk(props.id, props.name)};
    let bstyle = (props.followed !== true) ? styles.follow : styles.unfollow;

    return (
        <div className={styles.user}>
            <NavLink to={`/profile/${props.id}`}>
                <div className={styles.avatar}><img src={props.avatar} alt="" /></div>
            </NavLink>
            <div className={styles.name}>{props.name} <br /> {props.second__name}</div>
            
            <button disabled = {props.following.some(id => id === props.id)} onClick={a} className={bstyle}> {t}</button>
        </div>
    )
}
export default User;

