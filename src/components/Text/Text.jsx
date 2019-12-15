import React from 'react';
import styles from './Text.module.css';
import Post from './Post/Post.jsx'

const Text = () =>{
    return <div className={styles.Info}>
        <div className={styles.text}>
            <h3>Вася пупкин</h3>
            <p>Изменить статус</p>
        </div>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </div>

    
}
export default Text;