import React from 'react';
import styles from './User.module.css'
import { NavLink } from 'react-router-dom';
let User = (props) => {

    let follow = () => {
        props.follow(props.id);
        alert('Теперь ' + props.name + " " + props.second__name + ' ваш друг')
    }
    let unfollow = () => {
        props.unfollow(props.id);
        alert('Вы отписались от ' + props.name + " " + props.second__name);
    }
    let t = (props.followed !== true) ? 'Follow' : 'Unfollow';
    let a = (props.followed === true) ? unfollow : follow;
    let bstyle = (props.followed !== true) ? styles.follow : styles.unfollow;
    return (
        <div className={styles.user}>
            <NavLink to={`/profile/${props.id}`}>
                <div className={styles.avatar}><img src={props.avatar} alt="" /></div>
            </NavLink>
            <div className={styles.name}>{props.name} <br /> {props.second__name}</div>
            
            <button onClick={a} className={bstyle}> {t}</button>
        </div>
    )
}
export default User;

