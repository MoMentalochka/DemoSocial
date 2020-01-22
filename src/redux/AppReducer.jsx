import { AuthThunk } from './AuthReducer';

const Init = 'Init';

let initialState ={
    initial : false,
 
};
const AppReducer = (state = initialState, action) => {

    switch (action.type) {

        case Init:
            return {
                
                ...state,
                initial : true
            }

        default:
            return { ...state }
    };

};

export const InitThunk = () => {
    return (dispatch) => {
       let promise = dispatch(AuthThunk())
        promise && dispatch(initialize())
    };
}

export const initialize = () => ({ type: Init});
        
export default AppReducer;