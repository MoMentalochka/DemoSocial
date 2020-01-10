import React from 'react';
import {Login} from '../../redux/AuthReducer'
import Header from './Header';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { AuthApi } from './../api/api';


class HeaderContainer extends React.Component {
   
    componentDidMount() {
        AuthApi.auth().then(response => {
                        let data = {...response.data}
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
