import React from 'react';
import {Login, Auth} from '../../redux/AuthReducer'
import Header from './Header';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';


class HeaderContainer extends React.Component {
   
    componentDidMount() {
        this.props.Auth()
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
export default connect (mapStateToProps, {Login, Auth} )(withRouter(HeaderContainer))
