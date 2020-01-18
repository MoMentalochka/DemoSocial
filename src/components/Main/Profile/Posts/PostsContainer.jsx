import React from 'react';
import Posts from './Posts';
import Post from './Post/Post';
import {AddPostActionCreator} from '../../../../redux/ProfileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    
    let PostElements =
        state.profilePage.PostsData.map(p => <Post key={p.id} message={p.message} id={p.id} like_counter={p.like_counter} name={p.name} second__name={p.second__name} avatar={p.avatar} />).reverse()
    return {
        newPostText : state.profilePage.newPostText,
        PostElements: PostElements
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(AddPostActionCreator(text));
        },
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;