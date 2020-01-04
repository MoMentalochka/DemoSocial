import React from 'react';
import Profile from './Profile';
import {setUserProfile,} from '../../../redux/ProfileReducer'
import * as axios from 'axios';
import { connect } from 'react-redux';
import Preloader from '../../common/Preloader'

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/11`)
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

export default connect (mapStateToProps,{setUserProfile,})(ProfileContainer)
