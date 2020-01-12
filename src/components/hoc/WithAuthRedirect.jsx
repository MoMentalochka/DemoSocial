import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
let mapStateToProps = (state) =>{
    return{
        isAuth : state.Auth.auth
    }
}

export const WithAuthRedirect = (Component) => {

    class RedirectedComponent extends React.Component{

        render(){
            if(!this.props.isAuth) return <Redirect to={'/login'}/>;

            return <Component {...this.props}/>
        }
    }

    let WithAuthRedirectedComponent = connect(mapStateToProps)(RedirectedComponent)

    return WithAuthRedirectedComponent;
}