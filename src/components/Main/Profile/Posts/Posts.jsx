import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post'

const Posts = () =>{
    return <div className={styles.posts}>
    <Post message="Привет, я первый пропс" like_counter="12" name="Гена" second__name="Печкин"/>
    <Post message="Привет, я второй пропс" like_counter="14" name="Гена" second__name="Печкин"/>
    <Post message="Привет, я третий пропс" like_counter="0" name="Гена" second__name="Печкин" />
    <Post message="Привет, я четвёртый пропс" like_counter="0" name="Гена" second__name="Печкин"/>
    <Post message="Привет, я пятый пропс" like_counter="1" name="Гена" second__name="Печкин"/>
    </div>

    
}
export default Posts;