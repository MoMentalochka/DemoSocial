import React from 'react';
import styles from './Info.module.css';

const Info = (props) =>{
    return <div className={styles.info}>
        <div className={styles.text}>
            <h3><a href="#">{props.name +" "+ props.second_name}</a></h3>
            <p><div className={styles.status}>Изменить статус</div></p>
        </div>
    </div>

    
}
export default Info;