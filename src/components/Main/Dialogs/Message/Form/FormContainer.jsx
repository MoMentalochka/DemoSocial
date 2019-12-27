import React from 'react';
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from '../../../../../redux/DialogReducer';
import Form from './Form';
    const FormContainer = (props) =>{

        let AddMessage = () =>{
            props.dispatch(AddMessageActionCreator());
        };

        let UpdateNewMessageText = (text) =>{
            let action = UpdateNewMessageTextActionCreator(text);
            props.dispatch(action);
            console.log(action);
        };
        
        return (<Form newMessageText = {props.newMessageText} UpdateNewMessageText = {UpdateNewMessageText} AddMessage = {AddMessage} />)
    
    }

export default FormContainer;