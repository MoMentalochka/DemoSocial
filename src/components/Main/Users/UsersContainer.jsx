import { connect } from 'react-redux';
import Users from './Users'

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

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;