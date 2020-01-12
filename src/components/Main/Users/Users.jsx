import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import UserPhoto from '../../../Img/User.jpg'   



    let Users = (props) => {
        
        let PagesCount = Math.ceil(props.totalCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= PagesCount; i++) {
             pages.push(i)}

        let Users =
        props.usersData.map(u => <User key={u.id} name={u.name} second__name={u.second__name} id={u.id} avatar={u.photos.small != null ? u.photos.small : UserPhoto} following = {props.following} followed={u.followed} follow = {props.follow} unfollow = {props.unfollow} followingInProgress = {props.followingInProgress} unfollowThunk = {props.unfollowThunk} followThunk = {props.followThunk}  />)
        
        return (
           
            <div className={styles.users}>
                {Users}
                {pages.map(p => { return <span className={props.currentPage === p ? styles.activePage : styles.Page} onClick={() => props.setCurrentPage(p)}> {p} </span> })}
            </div>
            
        )
    }
export default Users;