import { createStore, combineReducers } from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from './DialogReducer';
import UsersReducer from "./UsersReducer";



let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogReducer,
    usersPage : UsersReducer,
})
let store = createStore(reducers);

window.store = store

export default store;