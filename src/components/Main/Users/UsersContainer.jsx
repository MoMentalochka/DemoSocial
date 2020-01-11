import { connect } from 'react-redux';
import React from 'react';
import { setCurrentPage, follow, unfollow, followingInProgress, getUsers,unfollowThunk, followThunk } from '../../../redux/UsersReducer';
import Users from './Users'
import Preloader from '../../common/Preloader';

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (p) => {
        this.props.getUsers(p, this.props.pageSize)
        // this.props.isFetching(true)
        // this.props.setCurrentPage(p)
        // UsersApi.getUsers(p ,this.props.pageSize)
        // .then(response => {
        //     this.props.setUsers(response.items)
        //     this.props.isFetching(false)
        // });
    }
    
    render(){ return <> 
        {this.props.isFetch ? <Preloader/> :  <Users {...this.props} setCurrentPage = {this.setCurrentPage} />}
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
        following : state.usersPage.following
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
export default connect (mapStateToProps,{ setCurrentPage,  follow, unfollow, followingInProgress, getUsers, unfollowThunk, followThunk })(UsersContainer);