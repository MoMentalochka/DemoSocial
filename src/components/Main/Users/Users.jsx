import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import { setUsersAC } from '../../../redux/UsersReducer'
import * as axios from 'axios'
import UserPhoto from '../../../Img/User.jpg'
const Users = (props) => {
    let Users =
        props.state.usersPage.usersData.map(u => <User key={u.id} name={u.name} second__name={u.second__name} id={u.id} avatar={u.photos.small != null ? u.photos : UserPhoto} followed={u.followed} dispatch={props.dispatch} />)



    let GetUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            let data = response.data.items
            props.dispatch(setUsersAC(data))
        });


    }
    return (
        <div className={styles.news}>
            {Users}
            <div > <input type="button" value="Show more" onClick={GetUsers} /> </div>
        </div>
    )
}

export default Users;