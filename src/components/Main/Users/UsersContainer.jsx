import { connect } from 'react-redux';
import * as axios from 'axios';
import React from 'react';
import { setCurrentPage, setTotalCount, setUsers, isFetching, follow, unfollow } from '../../../redux/UsersReducer';
import Users from './Users'
import Preloader from '../../common/Preloader'

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.isFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
            this.props.isFetching(false)
        });
    }

    setCurrentPage = (p) => {
        this.props.isFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
            this.props.isFetching(false)
        });
    }
    



    render(){ return <> 
        {this.props.isFetch ? <Preloader/> :  <Users data = {this.props} follow = {this.props.follow} unfollow = {this.props.unfollow} setCurrentPage= {this.setCurrentPage}/>}
        </>
    }
    
    
}

let mapStateToProps = (state) => {
    return {
        usersData : state.usersPage.usersData,
        currentPage : state.usersPage.currentPage,
        totalCount : state.usersPage.totalCount,
        pageSize : state.usersPage.pageSize,
        isFetch : state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch,
//         setCurrentPage,
//         setTotalCount,
//         isFetching,
//     }
// }

export default connect (mapStateToProps,{ setCurrentPage, setTotalCount, setUsers, isFetching, follow, unfollow })(UsersContainer);