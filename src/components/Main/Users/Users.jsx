import React from 'react';
import styles from './Users.module.css';
import User from './User/User';

const Users = (props) =>{
let Users = 
props.state.usersPage.usersData.map( u => <User key={u.id} name={u.name} second__name={u.second__name} id={u.id} avatar={u.avatar} followed ={u.followed} dispatch ={props.dispatch}/>)
    return <div className={styles.news}>
    {Users}
    </div>  
}
export default Users;