import React from 'react';
import styles from './Posts.module.css';
import { Field, reduxForm } from 'redux-form';

const addForm = (props) =>{
    return (
        <form onSubmit = {props.handleSubmit} className={styles.form}>
            <Field className={styles.textarea} component={'input'} type = {'textarea'} name="post" className={styles.textarea} placeholder="Напишите что-нибудь" />
            <button className={styles.button}> Отправить </button>
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