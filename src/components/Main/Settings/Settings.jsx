import React from 'react';
import styles from './Settings.module.css';
import { WithAuthRedirect } from './../../hoc/WithAuthRedirect';

const Settings = () =>{
    return <div className={styles.settings}>
    Settings
    </div>
    
}
export default WithAuthRedirect(Settings);