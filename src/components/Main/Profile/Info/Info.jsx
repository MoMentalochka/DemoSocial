import React from 'react';
import styles from './Info.module.css';
import StatusWithHooks from './statusNew';

const Info = (props) =>{
    return <div className={styles.info}>
        <div className={styles.text}>
            <h3>{props.profilePage.ProfileData.fullName}</h3>
           <StatusWithHooks status = {props.profilePage.status} updateUserStatus = {props.updateUserStatus} />
        </div>
    </div>

    
}
export default Info;