import React from 'react';
import PostsContainer from '../Profile/Posts/PostsContainer';
import Avatar from './Avatar/Avatar';
import FriendsContainer from './Friends/FriendsContainer';
import Info from './Info/Info';
import styles from './Profile.module.css';

const Profile = (props) => {
    
    return <div className={styles.profile}>
                <Avatar avatar={props.profilePage.ProfileData.photos.large} />
                <FriendsContainer/>
                <Info profilePage={props.profilePage}  updateUserStatus = {props.updateUserStatus}/>
                <PostsContainer />  
            </div>

}
export default Profile;