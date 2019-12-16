import React from 'react';
import styles from './Info.module.css';

const Info = () =>{
    return <div className={styles.info}>
        <div className={styles.text}>
            <h3>Вася Пупкин</h3>
            <p>Изменить статус</p>
        </div>
    </div>

    
}
export default Info;