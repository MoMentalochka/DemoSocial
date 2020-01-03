import React from 'react';
import styles from './Posts.module.css';


const Posts = (props) =>{
   
        // Данные для поста в пропсах
    let newPostElement = React.createRef();

    let OnAddPost = () => {
        props.addPost();
    };

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.UpdateNewPostActionCreator(text);
    }
    return (
        <div className={styles.posts}>
        <div className={styles.form}>
            <textarea placeholder="Напишите что-нибудь" ref = {newPostElement} value={props.newPostText} onChange={onPostChange} />
            <input type="button" onClick={OnAddPost} value="Запостить"/>
            </div>
            {props.PostElements }
        
        </div>
    )
    
}
export default Posts;