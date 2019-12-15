import React from 'react';
import styles from './Profile.module.css';
import Text from '../Text/Text';
import Discription from './Discription/Discription';

const Profile = () =>{
    return <div className={styles.profile}>
    <Discription/>
    <Text/>
    </div>
    
}
export default Profile;