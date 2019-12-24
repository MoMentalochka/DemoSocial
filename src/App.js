import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Main/Profile/Profile';
import Dialogs from './components/Main/Dialogs/Dialogs';
import News from './components/Main/News/News';
import Music from './components/Main/Music/Music';
import Settings from './components/Main/Settings/Settings'
import { Route } from 'react-router-dom';

debugger
const App =(props) => {
  window.props = props
  return (
    <div className='app-wrapper'>
    <div className="container">
      <Header/>
      <Nav/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render = { () => <Profile dispatch = { props.dispatch } profilePage ={ props.state.profilePage }/>}/>
        <Route path='/dialogs' render = { () => <Dialogs  dispatch = { props.dispatch } dialogsPage ={ props.state.dialogsPage }/>}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </div>
    </div>
  );
}

export default App;
