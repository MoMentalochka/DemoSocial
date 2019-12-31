import { createStore, combineReducers } from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from './DialogReducer';


let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogReducer,
})
let store = createStore(reducers);
console.log(store.getState())
export default store;