import React from 'react'
import { reduxForm, Field } from 'redux-form'
import styles from './Login.module.css'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={styles.login}  type={"login"} name={'login'} placeholder="login" component={'input'} />
            </div>
            <div>
                <Field className={styles.login} type={"password"} name={'password'} placeholder="Password" component={'input'} />
            </div>
            <div>
             <Field className={styles.check} type={"checkbox"} name={'rememberMe'} component={'input'} /> <span>remember me</span> 
            </div>
                <button className={styles.button}>Login</button>


        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login', })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData);
        formData.login = '';
        formData.password = '';
        formData.rememberMe = false;
    }
    return <div className={styles.loginPage}>
        <div className={styles.form}>
            <h1> Авторизация </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>  
    </div>
}


export default Login;