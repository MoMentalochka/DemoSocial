import React from 'react';
import styles from './User.module.css'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let User = (props) => {

    let follow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
            {},
            { withCredentials: true,
                headers: {
                    "API-KEY" : "e4d8f4b1-5dff-4ee4-8687-26915b319abf"}
                 },
        )
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(props.id);
                    alert('Теперь ' + props.name + " " + props.second__name + ' ваш друг')
                }


            });
    }

    let unfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
            { withCredentials: true,
            headers: {
               "API-KEY" : "e4d8f4b1-5dff-4ee4-8687-26915b319abf"
            } },
            
        )
        .then(response => {
            if (response.data.resultCode === 0) {
                props.unfollow(props.id);
                alert('Вы отписались от ' + props.name + " " + props.second__name)
            }
        });
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

