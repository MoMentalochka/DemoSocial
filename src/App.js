import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Main/Profile/Profile';
import Dialogs from './components/Main/Dialogs/Dialogs';
import News from './components/Main/News/News';
import Music from './components/Main/Music/Music';
import Settings from './components/Main/Settings/Settings'
import {BrowserRouter, Route } from 'react-router-dom';


const App =(props) => {
  return (
    <BrowserRouter>

    <div className='app-wrapper'>
    <div className="container">
      <Header/>
      <Nav/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render = { () => <Profile profilePage = { props.state.profilePage } addPost= {props.addPost} UpdateNewPostText = {props.UpdateNewPostText}/>}/>
        <Route path='/dialogs' render = { () => <Dialogs dialogsPage = {props.state.dialogsPage} addMessage={props.addMessage} UpdateNewMessageText = {props.UpdateNewMessageText}/>}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </div>
    </div>

  </BrowserRouter>
  );
}

export default App;
