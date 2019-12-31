import React from 'react';
import Friend from './Friend/Friend';
import Friends from './Friends';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    let FriendsElement = state.profilePage.FriendsData.map(p => <Friend key={p.id} message={p.message} id={p.id} name={p.name} second__name={p.second__name} avatar={p.avatar} />);
    return {
        FriendsElement: FriendsElement
    }     
}
const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;