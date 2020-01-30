import { ProfileApi } from "../components/api/api";
import Userlogo from '../Img/User.jpg'

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_USER_STATUS= "SET-USER-STATUS";

let initialState = {

    ProfileData : null,

    PostsData : [
        { id: '1', name: 'Franki', message: 'Franki', second__name: 'Alladay', like_counter: '10', avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false' },
        { id: '2', name: 'Nikolay', message: 'Franki',second__name: 'Puchinin', like_counter: '11', avatar: 'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg' },
        { id: '3', name: 'Maksim',message: 'Franki', second__name: 'Moiseenko', like_counter: '12', avatar: 'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg' },
        { id: '4', name: 'Ignat',message: 'Franki', second__name: 'Lesovckiy', like_counter: '13', avatar: 'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200' },
        { id: '5', name: 'Alexei',message: 'Franki', second__name: 'Michailov', like_counter: '14', avatar: 'https://s1.1zoom.ru/big3/718/422583-blackangel.jpg' },
        { id: '6', name: 'Oleg',message: 'Franki', second__name: 'Radzievskiy', like_counter: '15', avatar: 'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false' }
    ],
    FriendsData : [
        { id: '1', name: 'Franki', second__name: 'Alladay', avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false' },
        { id: '2', name: 'Nikolay', second__name: 'Puchinin', avatar: 'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg' },
        { id: '3', name: 'Maksim', second__name: 'Moiseenko', avatar: 'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg' },
        { id: '4', name: 'Ignat', second__name: 'Lesovckiy',  avatar: 'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200' },
        { id: '5', name: 'Alexei', second__name: 'Michailov', avatar: 'https://s1.1zoom.ru/big3/718/422583-blackangel.jpg' },
        { id: '6', name: 'Oleg', second__name: 'Radzievskiy',  avatar: 'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false' },
    ],
    isFetching : true,
    status : null,
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5595,
                name: "MoMentalochka" ,
                second__name: null,
                like_counter: 0,
                message: action.text,
                avatar: Userlogo
            };
            return {
                ...state,
                PostsData: [...state.PostsData, { ...newPost }],
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                ProfileData : {...action.profile},
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status : action.status,
            }
        case TOGGLE_IS_FETCHING :
            return{
                ...state,
                isFetching :  action.isFetching
            }

        default:
            return { ...state };
    }
}

export const AddPostActionCreator = (text) => ({ type: ADD_POST, text });
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const isFetching = (isFetching) => ({type : TOGGLE_IS_FETCHING, isFetching });
export const setStatus = (status) => ({ type: SET_USER_STATUS, status }) ;

//====== Thunks ======
export const getUsersProfile = (userId) => async (dispatch) =>{
    let response = await ProfileApi.setUserProfile(userId)
        dispatch(setUserProfile(response.data))

}

export const getUserStatus = (userId) => async (dispatch) =>{
    let response = await ProfileApi.getUserStatus(userId)
        dispatch(setStatus(response.data))
}


export const updateUserStatus = (status) => (dispatch) =>{
    ProfileApi.updateStatus(status).then(() => {
        dispatch(setStatus(status))
    });
}

export default profileReducer;