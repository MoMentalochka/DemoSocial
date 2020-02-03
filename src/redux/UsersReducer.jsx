import { UsersApi, FollowApi } from './../components/api/api';

let SET_USERS = "SET-USERS";
let UNFOLLOW = "UNFOLLOW";
let FOLLOW = "FOLLOW"
let SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
let SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
let TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
let TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING"
let initialState ={
    usersData : [],
    currentPage : 1,
    totalCount : 0,
    pageSize : 7,
    isFetching : true,
    following : []
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
           return{
               ...state,
               usersData : state.usersData.map(u => {
                    if (u.id === action.id)
                    {
                        return {...u, followed : true }
                    }
                    return u;  
               }),
                       }

        case UNFOLLOW:
            return{
                ...state,
                usersData : state.usersData.map(u => {
                     if (u.id === action.id)
                     {
                         return ({...u, followed : false })
                     }
                     return u;
                }),
                
                        }

        case SET_USERS:
            
            return{
                ...state,
                usersData :  [...action.data ]
            }
        case SET_CURRENT_PAGE:
            
            return{
                ...state,
                currentPage :  action.currentPage
            }
        case SET_TOTAL_COUNT:
            
            return{
                ...state,
                totalCount :  action.totalCount
            }
        case TOGGLE_IS_FETCHING :
            
            return{
                ...state,
                isFetching :  action.isFetching
            }
        case TOGGLE_IS_FOLLOWING :
            
            return{
                ...state,
                following : action.following 
                ? [...state.following,action.id]
                : state.following.filter(id => id !== action.id)
            }

        default:
            return{...state,
                
            
            }
    }
};

//====== Thunks ======
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(isFetching(true));
    let response = await UsersApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.items))
    dispatch(setTotalCount(response.totalCount))
    dispatch(setCurrentPage(currentPage))
    dispatch(isFetching(false))
}

export const followThunk = (id) => async (dispatch) => {
    dispatch(followingInProgress(true, id));

    let response = await FollowApi.followApi(id)
    if (response.data.resultCode === 0) {
        dispatch(follow(id));
    }
    dispatch(followingInProgress(false, id))
}


export const unfollowThunk = (id) => async (dispatch) => {
    dispatch(followingInProgress(true, id));

    let response = await FollowApi.unfollowApi(id)
    if (response.data.resultCode === 0) {
        dispatch(unfollow(id));
    }
    dispatch(followingInProgress(false, id))
}


export const follow = (UserId) => ({type : FOLLOW, id : UserId})
export const unfollow = (UserId) => ({type : UNFOLLOW, id : UserId})
export const setUsers = (Users) => ({type : SET_USERS, data : Users })
export const setCurrentPage = (currentPage) => ({type : SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalCount) => ({type : SET_TOTAL_COUNT, totalCount })
export const isFetching = (isFetching) => ({type : TOGGLE_IS_FETCHING, isFetching })
export const followingInProgress = (following , id) => ({type : TOGGLE_IS_FOLLOWING, following, id })
export default UsersReducer; 