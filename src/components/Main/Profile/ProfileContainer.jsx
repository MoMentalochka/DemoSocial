import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile,} from '../../../redux/ProfileReducer'
import Preloader from '../../common/Preloader'
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from './../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { ProfileApi } from './../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.url
            ProfileApi.setUserProfile(userId).then(response => {
                this.props.setUserProfile(response.data)
            });
            
    }

    render() {
            if (!this.props.profilePage.ProfileData & this.props.isAuth) return <Preloader />
            else return   <Profile ProfileData = {this.props.profilePage.ProfileData} />
       
         
    }
    
}

let mapStateToProps = (state) =>{
   
    return{
    profilePage : state.profilePage,
    }
}


export default  compose(
                    connect (mapStateToProps, {setUserProfile}),
                    withRouter,
                    WithAuthRedirect
                )(ProfileContainer)
