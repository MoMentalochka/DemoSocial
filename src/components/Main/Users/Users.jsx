import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import { setUsersAC } from '../../../redux/UsersReducer'
import * as axios from 'axios'
import UserPhoto from '../../../Img/User.jpg'

class Users extends React.Component {
    
    constructor(props){
        super(props);
        alert('New Users')
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
            this.props.dispatch(setUsersAC(response.data.items))
        });
    }
    render(){
        let Users =
        this.props.state.usersPage.usersData.map(u => <User key={u.id} name={u.name} second__name={u.second__name} id={u.id} avatar={u.photos.small != null ? u.photos : UserPhoto} followed={u.followed} dispatch={this.props.dispatch} />)
        return (
            <div className={styles.news}>
            {Users}
                <div > <input type="button" value="Show more"  /> </div>
            </div>
        )
    }
}

export default Users;