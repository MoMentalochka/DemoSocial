import React from 'react';
import Profile from './Profile';
import {setUserProfile,} from '../../../redux/ProfileReducer'
import * as axios from 'axios';
import { connect } from 'react-redux';
import Preloader from '../../common/Preloader'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.url
        axios.get(`https://social-network.samuraijs.com/api/1.0/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
                
            });
    }

    render() {
        if (!this.props.profilePage.ProfileData) return <Preloader />
           else return   <Profile ProfileData = {this.props.profilePage.ProfileData}/>
    }

}

let mapStateToProps = (state) =>{
    return{
    profilePage : state.profilePage
    }
}

export default connect (mapStateToProps,{setUserProfile,})( withRouter(ProfileContainer))
