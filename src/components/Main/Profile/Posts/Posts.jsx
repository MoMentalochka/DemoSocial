import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) =>{
   
        // Данные для поста в пропсах
    let PostElements =
    props.PostsData.map(p => <Post message={p.message} id={p.id} like_counter={p.like_counter} name={p.name} second__name={p.second__name} avatar={p.avatar} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.UpdateNewPostText(text);
    }
    return (
        <div className={styles.posts}>
         <textarea ref = {newPostElement} value={props.newPostText} onChange={onPostChange} />
         <input type="button" onClick={addPost} value="Запостить"/>
            { PostElements }
        </div>
    )
    
}
export default Posts;