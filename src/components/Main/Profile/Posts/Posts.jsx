import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post'
import {AddPostActionCreator, UpdateNewPostActionCreator} from '../../../../redux/ProfileReducer';
const Posts = (props) =>{
        // Данные для поста в пропсах
    let PostElements =
    props.profilePage.PostsData.map(p => <Post message={p.message} id={p.id} like_counter={p.like_counter} name={p.name} second__name={p.second__name} avatar={p.avatar} />).reverse()

    let newPostElement = React.createRef();
    

    let addPost = () => {
        props.dispatch(AddPostActionCreator());
    };
    debugger
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = UpdateNewPostActionCreator(text)
        props.dispatch(action);
    }
    return (
        <div className={styles.posts}>
        <div className={styles.form}>
            <textarea placeholder="Напишите что-нибудь" ref = {newPostElement} value={props.profilePage.newPostText} onChange={onPostChange} />
            <input type="button" onClick={addPost} value="Запостить"/>
            </div>
            { PostElements }
        
        </div>
    )
    
}
export default Posts;