import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
const Dialogs = () => {
    return (
        <div className={styles.dialogs}>

            <div className={styles.dialog_list}>
                <NavLink to='#' activeClassName={styles.active}>
                    <div className={styles.dialog_list_item} >
                        Пользователь 1
                    </div>
                </NavLink>

                <NavLink to='#' >
                    <div className={styles.dialog_list_item}>
                        Пользователь 2
                    </div>
                </NavLink>

                <NavLink to='#'>
                    <div className={styles.dialog_list_item}>
                        Пользователь 3
                    </div>
                </NavLink>

                <NavLink to='#'>
                    <div className={styles.dialog_list_item}>
                        Пользователь 4
                    </div>
                </NavLink>

                <NavLink to='#'>
                    <div className={styles.dialog_list_item}>
                        Пользователь 5
                    </div>
                </NavLink>
            </div>

            <div className={styles.massages_list}>
                <div className={styles.massages_list_item}>1 Hey!</div>
                <div className={styles.massages_list_item}>2 Hey!</div>
                <div className={styles.massages_list_item}>3 Hey!</div>
                <div className={styles.massages_list_item}>4 Hey!</div>
                <div className={styles.massages_list_item}>5 Hey!</div>
            </div>
        </div>
    )

}
export default Dialogs;