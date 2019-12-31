import React from 'react';
import {followAC,unfollowAC} from "../../../../redux/UsersReducer"
import styles from './User.module.css'
let User = (props) => {
    
    let follow = () =>{
        props.dispatch(followAC(props.id));
    }
    let unfollow = () =>{
        props.dispatch(unfollowAC(props.id)); 
       
    }
let t = (props.followed !== true) ? 'Follow' : 'Unfollow';
let a = (props.followed === true) ? unfollow : follow;
let bstyle = (props.followed !== true) ? styles.follow : styles.unfollow;
    return(
    <div className={styles.user}>
        <div className={styles.avatar}><img src={props.avatar} alt=""/></div>
        <div className={styles.name}>{props.name} <br/> {props.second__name}</div>
        <button onClick={a} className={bstyle}> {t}</button>
    </div>
    )
}
export default User;

