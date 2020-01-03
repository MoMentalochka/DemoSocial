import React from 'react';
import styles from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = '/dialogs/'+props.id;
    return (
        <NavLink to={path} activeClassName={styles.active}>
            <div className={styles.dialog_list_item} >
            <div><img className={styles.img} src={props.avatar} alt="Avatar"/></div>
                {props.name} <br/> {props.second__name}
            </div>
        </NavLink>
            )
}
export default DialogsItem;