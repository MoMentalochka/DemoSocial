import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import profileReducer from "./ProfileReducer";
import dialogReducer from './DialogReducer';
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogReducer,
    usersPage : UsersReducer,
    Auth : AuthReducer,
    form : formReducer,
})
let store = createStore(reducers,applyMiddleware(thunk));

window.store = store

export default store;