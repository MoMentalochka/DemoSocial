import * as axios from 'axios'

const instance = axios.create({
    withCredentials : true,
    baseURL :'https://social-network.samuraijs.com/api/1.0',
    headers: { "API-KEY" : "8aeede7b-fb00-4b24-b1d1-0f97a5c140ad" },
})

export const UsersApi = {
                // Users
    getUsers(currentPage = 1, pageSize = 5 ) {
        return  instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            
            return response.data 
        })
    },
}

export const FollowApi = {
                    //  UsersContainer
    followApi(id){
        return instance.post(`follow/${id}`)
    },
    unfollowApi(id){
        return  instance.delete(`follow/${id}`)
    },
}

export const AuthApi = {
                    // HeaderContainer
    auth(){
        return  instance.get(`/auth/me`)
    }
}
export const ProfileApi = {
        setUserProfile(id){
            return instance.get(`profile/${id}`)
        },
        getUserStatus(id){
            return instance.get(`profile/status/${id}`)
            
        },
        updateStatus(status){
            return instance.put(`profile/status`, {status : status})
        }    
}
         
