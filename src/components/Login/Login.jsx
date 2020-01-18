import React from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder="login" component={'input'} />
            </div>
            <div>
                <Field name={'password'} placeholder="Password" component={'input'} />
            </div>
            <div>
            <span> <Field type={"checkbox"} name={'rememberMe'} component={'input'} /> remember me</span> 
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login', })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData);
    }
    return <div>  
        <h1> Login </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;