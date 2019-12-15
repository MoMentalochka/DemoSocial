import React from 'react';
import styles from './Post.module.css';

const Post = (props) =>{
    
    return (
        <div className={styles.post}>
            <div className={styles.title}>
                <div className={styles.img}></div>
                <div className={styles.name}> {props.name +" "+props.second__name[0]+"." }  </div>
                
            </div>
            <div className={styles.content}>
                <div className={styles.message}>{props.message} </div>
                <div className={styles.like}> <img src="https://c7.uihere.com/files/487/556/13/thumb-signal-computer-icons-social-media-clip-art-social-media.jpg" alt=""/>{props.like_counter}</div>
            </div>
        </div>)
    
}
export default Post;