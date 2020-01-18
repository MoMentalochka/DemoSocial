import React from 'react';
import {AddMessageActionCreator,} from '../../../../../redux/DialogReducer';
import Form from './Form';
    const FormContainer = (props) =>{
        
        let AddMessage = (message) =>{
            props.dispatch(AddMessageActionCreator(message));
        };

        
        return (<Form onSubmit = {AddMessage} newMessageText = {props.newMessageText}  AddMessage = {AddMessage} />)
    
    }

export default FormContainer;