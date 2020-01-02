let SET_USERS = "SET-USERS";
let UNFOLLOW = "UNFOLLOW";
let FOLLOW = "FOLLOW"
let SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
let SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
let initialState ={

    usersData : [
        ],
    currentPage : 1,
    totalCount : 21,
    pageSize : 10,
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

        default:
            return{...state,
                
            
            }
    }

};
export const followAC = (UserId) => ({type : FOLLOW, id : UserId})
export const unfollowAC = (UserId) => ({type : UNFOLLOW, id : UserId})
export const setUsersAC = (Users) => ({type : SET_USERS, data : Users })
export const setCurrentPageAC = (currentPage) => ({type : SET_CURRENT_PAGE, currentPage })
export const setTotalCountAC = (totalCount) => ({type : SET_TOTAL_COUNT, totalCount })
export default UsersReducer;