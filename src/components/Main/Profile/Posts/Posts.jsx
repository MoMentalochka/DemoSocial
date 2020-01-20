import React from 'react';
import styles from './Posts.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../../../FormControlers/FormComponents';
import { required, maxlength } from './../../../Utility/Validation/validators';
const addForm = (props) =>{
    return (
        <form onSubmit = {props.handleSubmit}>
        <Field name = "post" 
            component = {Textarea} 
            type = {'textarea'} 
            placeholder = "Write something"  
            validate = {[required,maxlength]}
        />
    </form>
    )
}
const PostReduxForm = reduxForm({ form: 'post', })(addForm);

const Posts = (props) =>{
    const onSubmit = (formData) =>{
        props.addPost(formData.post);
        console.log(formData);
        formData.post = '';
    }
    return (
        <div >
            <PostReduxForm onSubmit={onSubmit} />
            {props.PostElements}
        </div>
    )
    
}
export default Posts;