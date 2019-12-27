import React from 'react';
import styles from './Profile.module.css';
import PostsContainer from '../Profile/Posts/PostsContainer';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';
import FriendsContainer from './Friends/FriendsContainer';


const Profile = () =>{
    return <div className={ styles.profile }>
    <Avatar/>
    <FriendsContainer/>
    <Info name="Вася" second_name="Пупкин"/>
    <PostsContainer/>
    </div>
    
}
export default Profile;