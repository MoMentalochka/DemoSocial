import React from 'react'
import { reduxForm, Field } from 'redux-form'
import styles from './Login.module.css'
import { Input } from '../FormControlers/FormComponents'
import { required, maxlength16, maxlength, email } from '../Validation/validators';
import { connect } from 'react-redux';
import { LoginThunk} from '../../redux/AuthReducer'
import { Redirect } from 'react-router-dom';
import { FieldCreator } from '../common/FieldCreator';


const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <FieldCreator type={"login"}
                name={'email'}
                placeholder="login"
                component={Input}
                validate={[required, maxlength, email]}
            />
            <FieldCreator type={"password"}
                name={'password'} 
                placeholder="Password"
                component={Input}
                validate={[required, maxlength16]}
            />

        
            {props.error && <div className={styles.error}>{props.error} </div>}

            <div>
                <FieldCreator type={"checkbox"}
                    name={'rememberMe'}
                    component={'input'} />
                <span>remember me</span>
                />
            </div>

                <button className={styles.button}>Login</button>


        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login', })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.LoginThunk(formData.email,formData.password,formData.rememberMe)
        formData.login = '';
        formData.password = '';
        formData.rememberMe = false;  
        
    }

    if(!props.state.auth) return (
       
        <div className={styles.loginPage}>
            <div className={styles.form}>
                <h1> Авторизация </h1>
                <LoginReduxForm onSubmit={onSubmit}/>
                <p> Тестовые данные: <br/> Login: free@samuraijs.com <br/> Password: free</p>
            </div>  
            
        </div>
    )
    return <Redirect to = {`/profile/${props.state.id}`}/>
}

let mapStateToProps = (state) =>{
    return{
        state : state.Auth
    }
}
export default connect (mapStateToProps,{LoginThunk })(Login);