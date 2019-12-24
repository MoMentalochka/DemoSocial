import React from 'react';
import styles from './Form.module.css';
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from '../../../../../redux/state';



let newMessage = React.createRef();
    const Form = (props) =>{

        let addMessage = () =>{
            props.dispatch(AddMessageActionCreator());
        };
        let OnMessageChange = () =>{
            let text = newMessage.current.value;
            let action = UpdateNewMessageTextActionCreator(text);
            props.dispatch(action);
        };
        
        return (
            <div className={styles.form}>
            <textarea placeholder="Напишите сообщение" ref = {newMessage} value={props.MessageData.newMessageText} onChange = {OnMessageChange}/>
            <input type="button" onClick={addMessage} value="Отправить"/>
            </div>
        )
    }

export default Form;