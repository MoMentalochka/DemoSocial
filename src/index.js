import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state'
import {addPost, UpdateNewPostText, addMessage, UpdateNewMessageText,transfer} from './redux/state';
import * as serviceWorker from './serviceWorker';

let Rerender = (state) =>{
ReactDOM.render(<App state={state} addPost = {addPost} UpdateNewPostText = {UpdateNewPostText} addMessage = {addMessage} UpdateNewMessageText={UpdateNewMessageText}/>, document.getElementById('root'));
}
Rerender(state);
transfer(Rerender);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

