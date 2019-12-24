const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) =>{
    switch (action.type){

        case ADD_POST: 
            let newPost = {
                id: state.PostsData.length+1,
                name: 'Franki',
                second__name: 'Alladay',
                like_counter: 0,
                message: state.newPostText,
                avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false'
            };
            state.PostsData.push(newPost);
            state.newPostText = "";
        return state;

        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.message; 
        return state;

        default : 
            return state;
    }
}

export const AddPostActionCreator = () => ({ type: ADD_POST });
export const UpdateNewPostActionCreator = (text) => {
    return ({
            type: UPDATE_NEW_POST_TEXT,
            message: text
            })
};


export default profileReducer;