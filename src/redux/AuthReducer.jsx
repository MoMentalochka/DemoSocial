import { AuthApi } from './../components/api/api';
import { stopSubmit } from 'redux-form';

const Log_in = 'Log-in';
const Log_out = 'Log-out';

let initialState ={
    id : null,
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
        case Log_out:
            
            return {
                
                ...state.id = null,
                ...state.email = null,
                ...state.login = null,
                ...state.auth = false,
            }
        default:
            return { ...state }
    };

};

//====== Thunks ======
export const AuthThunk = () => async (dispatch)=>{
        let response = await AuthApi.auth()
            let data = {...response.data};
            dispatch(Auth(data));
        return 'yo'; 
}
export const LoginThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await AuthApi.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(AuthThunk())
    }
    else {
        dispatch(stopSubmit("login", { _error: response.data.messages.pop() }))
    }
}
export const LogoutThunk = () => async (dispatch) => {
    let response = await AuthApi.logout()
    dispatch(Logout())
}

export const Auth = (data) => ({ type: Log_in, data});
export const Logout = () => ({ type: Log_out,});
        
export default AuthReducer;