import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import profileReducer from "./ProfileReducer";
import dialogReducer from './DialogReducer';
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import {reducer as formReducer} from 'redux-form'
import AppReducer from './AppReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogReducer,
    usersPage : UsersReducer,
    Auth : AuthReducer,
    form : formReducer,
    App : AppReducer,
})
// let store = createStore(reducers,applyMiddleware(thunk));

let store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),));

export default store;