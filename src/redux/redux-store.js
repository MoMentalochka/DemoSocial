import { createStore, combineReducers } from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from './DialogReducer';
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";



let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogReducer,
    usersPage : UsersReducer,
    Auth : AuthReducer,
})
let store = createStore(reducers);

window.store = store

export default store;