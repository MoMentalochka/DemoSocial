import React from 'react';
import styles from './Form.module.css';
import { reduxForm, Field } from 'redux-form';

    const addForm = (props) =>{
        return (
                <form onSubmit = {props.handleSubmit} className={styles.formS}>
                    <Field name = "message" className = {styles.textarea} component={'input'} type = {'textarea'} placeholder="Напишите сообщение"  />
                    <button className={styles.button}> Отправить </button>
                </form>
        )
    }

    const MessageReduxForm = reduxForm({ form: 'message', })(addForm);

    
    const Form = (props) => {
        const onSubmit = (formData) =>{
            props.AddMessage(formData.message);
            console.log(formData);
            formData.message = '';
        }
        return <div className={styles.form}>  
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    }
export default Form;