import React from 'react';
import styles from './Form.module.css';

let newMessage = React.createRef();
    const Form = (props) =>{

        let addMessage = () =>{
            props.AddMessage();
        };
        let OnMessageChange = () =>{
            let text = newMessage.current.value;
            props.UpdateNewMessageText(text);
        };
        
        return (
            <div className={styles.form}>
            <textarea placeholder="Напишите сообщение" ref = {newMessage} value={props.newMessageText} onChange = {OnMessageChange}/>
            <input type="button" onClick={addMessage} value="Отправить"/>
            </div>
        )
    }

export default Form;