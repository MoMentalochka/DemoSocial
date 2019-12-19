import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state';
import {UpdateNewPostText} from './redux/state';

export let Rerender = (state) =>{
ReactDOM.render(<App state={state} addPost = {addPost} UpdateNewPostText = {UpdateNewPostText} />, document.getElementById('root'));

}

   


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

