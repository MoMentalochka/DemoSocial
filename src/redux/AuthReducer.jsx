
import { AuthApi } from './../components/api/api';
const Log_in = 'Log-in';
const Log_Out = 'Log-Out';
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
                ...action.data,
                
                
            }
        case Log_Out:
            return {
                ...state,
                ...action.data,
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
export const LogOut = (data) => {return {type: Log_Out, data}};
        
export default AuthReducer;