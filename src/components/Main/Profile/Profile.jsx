import React from 'react';
import PostsContainer from '../Profile/Posts/PostsContainer';
import Avatar from './Avatar/Avatar';
import FriendsContainer from './Friends/FriendsContainer';
import Info from './Info/Info';
import styles from './Profile.module.css';

const Profile = (props) => {
     
    return <div className={styles.profile}>
                <Avatar avatar={props.ProfileData.photos.small} />
                <FriendsContainer />
                <Info ProfileData={props.ProfileData} />
                <PostsContainer />
            </div>

}
export default Profile;