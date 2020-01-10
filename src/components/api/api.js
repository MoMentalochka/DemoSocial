import * as axios from 'axios'

const instance = axios.create({
    withCredentials : true,
    baseURL :'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY" : "e4d8f4b1-5dff-4ee4-8687-26915b319abf" },
})

export const UsersApi = {
                // Users
    getUsers(currentPage = 1, pageSize = 5 ) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
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
        return  instance.get(`auth/me`)
        .then(response =>{
                        return response.data
        })
    }
}
