import React from 'react';
import styles from './Form.module.css';


let newMessage = React.createRef();
    const Form = (props) =>{
        let addMessage = () =>{
            props.dispatch({type : 'ADD-MESSAGE'});
        }
        let OnMessageChange = () =>{
            let text = newMessage.current.value;
            props.dispatch({type : 'UPDATE-NEW-MESSAGE-TEXT',
                            message : text});
        }
        return (
            <div className={styles.form}>
            <textarea placeholder="Напишите сообщение" ref = {newMessage} value={props.MessageData.newMessageText} onChange = {OnMessageChange}/>
            <input type="button" onClick={addMessage} value="Отправить"/>
            </div>
        )
    }

export default Form;