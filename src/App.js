import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Main/Profile/ProfileContainer';
import News from './components/Main/News/News';
import Music from './components/Main/Music/Music';
import Settings from './components/Main/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Main/Dialogs/DialogsContainer';
import UsersContainer from './components/Main/Users/UsersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
    <div className="container">
      <Header/>
      <Nav/>
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render = { () => <ProfileContainer/>}/>
        <Route path='/dialogs' render = { () => <DialogsContainer />}/>
        <Route path='/users' render = { () => <UsersContainer />}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </div>
    </div>
  );
}

export default App;
