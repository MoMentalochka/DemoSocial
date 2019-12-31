let SET_USERS = "SET-USERS";
let UNFOLLOW = "UNFOLLOW";
let FOLLOW = "FOLLOW"

let initialState ={

    usersData : [
        { id: '1', name: 'Franki', second__name: 'Alladay', avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false', followed : true },
        { id: '2', name: 'Nikolay', second__name: 'Puchinin',  avatar: 'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg', followed : true},
        { id: '3', name: 'Maksim', second__name: 'Moiseenko', avatar: 'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg', followed : true },
        { id: '4', name: 'Ignat', second__name: 'Lesovckiy',  avatar: 'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200', followed : true },
        { id: '5', name: 'Alexei', second__name: 'Michailov',  avatar: 'http://s019.radikal.ru/i605/1711/34/eada2b97814d.jpg', followed : true },
        { id: '6', name: 'Oleg', second__name: 'Radzievskiy',  avatar: 'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false', followed : false }
    ],
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
                
                        }

        default:
            return{...state}
    }
};

export const followAC = (UserId) => ({type : FOLLOW, id : UserId})
export const unfollowAC = (UserId) => ({type : UNFOLLOW, id : UserId})
export const setUsersAC = () => ({type : SET_USERS,  })
export default UsersReducer;