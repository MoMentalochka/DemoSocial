import { connect } from 'react-redux';
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        state: state
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;