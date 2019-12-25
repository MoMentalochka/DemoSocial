import React from 'react';
import Posts from './Posts';
import Post from './Post/Post';
import {AddPostActionCreator, UpdateNewPostActionCreator} from '../../../../redux/ProfileReducer';

const PostsContainer = (props) =>{

    let PostElements =
        props.profilePage.PostsData.map(p => <Post 
            message={p.message}
            id={p.id}
            like_counter={p.like_counter}
            name={p.name}
            second__name={p.second__name}
            avatar={p.avatar} />).reverse()

    let addPost = () => {
        props.dispatch(AddPostActionCreator());
    };

    let onPostChange = (text) =>{
        let action = UpdateNewPostActionCreator(text);
        props.dispatch(action);
    }
    return (<Posts UpdateNewPostActionCreator={onPostChange} newPostText = {props.profilePage.newPostText} addPost={addPost} PostElements = {PostElements}/>)
    
}
export default PostsContainer;