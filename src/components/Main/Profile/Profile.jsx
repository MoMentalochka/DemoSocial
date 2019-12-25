import React from 'react';
import styles from './Profile.module.css';
import PostsContainer from '../Profile/Posts/PostsContainer';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';
import Friends from './Friends/Friends';


const Profile = (props) =>{
    return <div className={ styles.profile }>
    <Avatar/>
    <Friends FriendsData = { props.profilePage.FriendsData }/>
    <Info name="Вася" second_name="Пупкин"/>
    <PostsContainer profilePage = { props.profilePage } dispatch = { props.dispatch } />
    </div>
    
}
export default Profile;