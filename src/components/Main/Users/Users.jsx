import React, { useEffect } from 'react';
import styles from './Users.module.css';
import User from './User/User';
import UserPhoto from '../../../Img/User.jpg'   
import { useState } from 'react';



 export let Pagination = (props) =>{
    
}

    let Users = (props) => {

        useEffect(() => {
            setBlokNumber(Math.ceil(props.currentPage/blokSize))
        }, [props.currentPage])

        let PagesCount = Math.ceil(props.totalCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= PagesCount; i++) {
            pages.push(i)}

        let blokSize = props.blokSize || 10;
        let [blokNumber, setBlokNumber] = useState(1);
        let leftbar = (blokNumber-1) * blokSize + 1;
        let rightbar = (blokNumber) * blokSize;



            let Paginator = 
            pages.filter(p=> p>=leftbar && p<=rightbar).map(p => { return <span className={props.currentPage === p ? styles.activePage : styles.Page} onClick={() => props.setCurrentPage(p)}> {p} </span> })
            let Users =
            props.usersData.map(u => <User key={u.id} name={u.name} second__name={u.second__name} id={u.id} avatar={u.photos.small != null ? u.photos.small : UserPhoto} following = {props.following} followed={u.followed} follow = {props.follow} unfollow = {props.unfollow} followingInProgress = {props.followingInProgress} unfollowThunk = {props.unfollowThunk} followThunk = {props.followThunk}  />)
        
        return (
           
            <div className={styles.users}>
                {Users}
                {blokNumber > 1 && <button onClick={()=>{setBlokNumber(blokNumber-1); props.setCurrentPage(leftbar-1)}}>Назад</button>}
                {Paginator}
                {blokNumber < Math.ceil(pages.length/blokSize)  && <button onClick={()=>{setBlokNumber(blokNumber+1); props.setCurrentPage(leftbar+blokSize)}}>Вперёд</button>}
            </div>
            
        )
    }
export default Users;