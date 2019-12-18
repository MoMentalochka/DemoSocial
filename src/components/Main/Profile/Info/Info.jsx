import React from 'react';
import styles from './Info.module.css';

const Info = (props) =>{
    return <div className={styles.info}>
        <div className={styles.text}>
            <h3>{props.name +" "+ props.second_name}</h3>
            <div className={styles.status}> <p>Изменить статус</p></div>
        </div>
    </div>

    
}
export default Info;