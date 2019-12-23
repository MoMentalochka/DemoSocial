import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state'
import * as serviceWorker from './serviceWorker';

let Rerender = (state) =>{
ReactDOM.render(<App state = { state } dispatch = { store.dispatch.bind(store) }/>, document.getElementById('root'));
}
Rerender(store.getstate());
store.subscriber(Rerender);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

