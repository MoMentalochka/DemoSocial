import React from 'react';
import styles from './Info.module.css';
import Status from './statue';

const Info = (props) =>{
    
    return <div className={styles.info}>
        <div className={styles.text}>
            <h3>{props.ProfileData.fullName}</h3>
           <Status {...props}/>
        </div>
    </div>

    
}
export default Info;