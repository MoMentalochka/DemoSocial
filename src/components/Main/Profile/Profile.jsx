import React from 'react';
import styles from './Profile.module.css';
import Posts from '../Profile/Posts/Posts';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';
import Friends from './Friends/Friends';


const Profile = (props) =>{
    return <div className={ styles.profile }>
    <Avatar/>
    <Friends FriendsData = { props.profilePage.FriendsData }/>
    <Info name="Вася" second_name="Пупкин"/>
    <Posts PostsData = { props.profilePage.PostsData } addPost={props.addPost} newPostText = {props.profilePage.newPostText} UpdateNewPostText = {props.UpdateNewPostText} />
    </div>
    
}
export default Profile;