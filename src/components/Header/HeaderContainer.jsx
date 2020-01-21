import React from 'react';
import { AuthThunk, LogoutThunk } from '../../redux/AuthReducer'
import Header from './Header';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';


class HeaderContainer extends React.Component {
   
    componentDidMount() {
        this.props.AuthThunk()
    }
    render() {
        return <Header {...this.props.state.Auth}  LogoutThunk={this.props.LogoutThunk}  />
    }
}
let mapStateToProps = (state) =>{
    return{
        state : {...state}
        
    }
}
export default connect (mapStateToProps, {AuthThunk,LogoutThunk } )(withRouter(HeaderContainer))
