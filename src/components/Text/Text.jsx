import React from 'react';
import styles from './Text.module.css';
import Post from './Post/Post.jsx'

const Text = () =>{
    return <div className={styles.Info}>
        <div className={styles.text}>
            <h3>Вася Пупкин</h3>
            <p>Изменить статус</p>
        </div>
      
    <Post message="Привет, я первый пропс" like_counter="12" name="Гена" second__name="Печкин"/>
    <Post message="Привет, я второй пропс" like_counter="14" name="Гена" second__name="Печкин"/>
    <Post message="Привет, я третий пропс" like_counter="0" name="Гена" second__name="Печкин" />
    <Post message="Привет, я четвёртый пропс" like_counter="0" name="Гена" second__name="Печкин"/>
    <Post message="Привет, я пятый пропс" like_counter="1" name="Гена" second__name="Печкин"/>
    </div>

    
}
export default Text;