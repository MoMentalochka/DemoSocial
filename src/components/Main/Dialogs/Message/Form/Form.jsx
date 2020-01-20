import React from 'react';
import styles from './Form.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxlength } from './../../../../Utility/Validation/validators';
import { Textarea } from './../../../../FormControlers/FormComponents';
let limit = 100;
    const addForm = (props) =>{
        return (
                <form onSubmit = {props.handleSubmit}>
                    <Field name = "message" 
                        component = {Textarea} 
                        type = {'textarea'} 
                        placeholder = "Write something"  
                        validate = {[required,maxlength]}
                    />
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