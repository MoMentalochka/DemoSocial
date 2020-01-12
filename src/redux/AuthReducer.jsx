
import { AuthApi } from './../components/api/api';
const Log_in = 'Log-in';
let initialState ={

    userId : null,
    email : null,
    login : null,
    auth : false,
};
const AuthReducer = (state = initialState, action) => {

    switch (action.type) {

        case Log_in:
            
            return {
                ...state,
                ...action.data.data,
                ...state.auth = (action.data.resultCode === 0) ? true : false
            }
        default:
            return { ...state }
    };

};
//Thunk 
export const Auth = () => {
    return (dispatch)=>{
        AuthApi.auth().then(response => {
            let data = {...response.data}
            dispatch(Login(data))
        });  
    }
}

export const Login = (data) => ({ type: Log_in, data});
        
export default AuthReducer;