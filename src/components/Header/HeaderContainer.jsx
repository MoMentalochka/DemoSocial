import React from 'react';
import {Login} from '../../redux/AuthReducer'
import * as axios from 'axios';
import Header from './Header';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

class HeaderContainer extends React.Component {
   
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true } )
            .then(response => {
                let data = {...response.data.data}
                this.props.Login(data)
                
            });
    }

    render() {
        return <Header {...this.props.state.Auth} />
    }
}

let mapStateToProps = (state) =>{
        return{
            state : {...state}
        }
    }
export default connect (mapStateToProps, {Login} )(withRouter(HeaderContainer))
