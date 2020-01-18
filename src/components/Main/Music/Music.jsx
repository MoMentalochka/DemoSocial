import React from 'react';
import styles from './Music.module.css';
import { WithAuthRedirect } from './../../hoc/WithAuthRedirect';

const Music = () =>{
    return <div className={styles.music}>
    Music
    </div>
    
}
export default WithAuthRedirect(Music);