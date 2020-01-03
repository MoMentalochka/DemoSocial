import { connect } from 'react-redux';
import * as axios from 'axios';
import React from 'react';
import { setCurrentPageAC, setTotalCountAC, setUsersAC } from '../../../redux/UsersReducer';
import Users from './Users'

class UsersContainer extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentpage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.dispatch(setUsersAC(response.data.items))
            this.props.dispatch(setTotalCountAC(response.data.totalCount))
            
        });
    }

    setCurrentPage = (p) => {
        this.props.dispatch(setCurrentPageAC(p))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.dispatch(setUsersAC(response.data.items))
        });
    }



    render(){ return <Users data = {this.props} setCurrentPage= {this.setCurrentPage}/>
        
    }
    
}

let mapStateToProps = (state) => {
    return {
        usersData : state.usersPage.usersData,
        currentPage : state.usersPage.currentPage,
        totalCount : state.usersPage.totalCount,
        pageSize : state.usersPage.pageSize,

    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch, 
        setCurrentPageAC : dispatch.setCurrentPageAC,
        setTotalCountAC : dispatch.setTotalCountAC
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);