import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import { setUsersAC, setCurrentPageAC, setTotalCountAC} from '../../../redux/UsersReducer'
import * as axios from 'axios'
import UserPhoto from '../../../Img/User.jpg'   

class Users extends React.Component {
    
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



    render(){
        let PagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= PagesCount; i++) {
             pages.push(i)
         };

        let Users =
        this.props.usersData.map(u => <User key={u.id} name={u.name} second__name={u.second__name} id={u.id} avatar={u.photos.small != null ? u.photos.small : UserPhoto} followed={u.followed} dispatch={this.props.dispatch} />)
        return (
            <div className={styles.news}>
            {Users}
            {pages.map(p => { return <span className = {this.props.currentPage === p && styles.activePage } onClick={ () => this.setCurrentPage(p) }> {p} </span>} )}
               

            </div>
        )
    }
}

export default Users;