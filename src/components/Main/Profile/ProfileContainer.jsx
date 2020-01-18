import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUsersProfile, getUserStatus, updateUserStatus} from '../../../redux/ProfileReducer'
import Preloader from '../../common/Preloader'
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from './../../hoc/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUsersProfile(userId);
        this.props.getUserStatus(userId);
    }
    
    render()  {
            return ( this.props.isAuth & !this.props.profilePage.ProfileData ?  <Preloader /> :  <Profile profilePage = {this.props.profilePage} updateUserStatus = {this.props.updateUserStatus} />);
            
    }
    
}

let mapStateToProps = (state) =>{
   
    return{
    profilePage : state.profilePage,

    }
}


export default  compose(
                    connect (mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}),
                    withRouter,
                    WithAuthRedirect
                )(ProfileContainer)
