import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import UserPhoto from '../../../Img/User.jpg'   
import { Pagination } from './../../common/Paginator/Paginator';

let Users = (props) => {
    let Users =
        props.usersData.map(u => <User key={u.id} name={u.name} second__name={u.second__name} id={u.id} avatar={u.photos.small != null ? u.photos.small : UserPhoto} following={props.following} followed={u.followed} follow={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress} unfollowThunk={props.unfollowThunk} followThunk={props.followThunk} />)

    return (

        <div className={styles.users}>
            {Users}
            <Pagination {...props} />
        </div>

    )
}
export default Users;