import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import Form from './Message/Form/Form';

const Dialogs = (props) => {
    // Данные Пользователей
  
        // Массив Диалогов
    let DialogsItems=
        props.dialogsPage.usersData.map(u => <DialogsItem name={u.name} second__name={u.second__name} id={u.id} avatar={u.avatar}/>);
    let Messages=
        props.dialogsPage.MessagesData.map(m => <Message message={m.message} id={m.id}/>);

 

   
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_list}>
               {DialogsItems}
            </div>
            <div className={styles.massages_list}>
                { Messages }
            </div>
            <Form  MessageData = {props.dialogsPage} addMessage={props.addMessage} UpdateNewMessageText = {props.UpdateNewMessageText}/>
            
        </div>
    ) 
}
export default Dialogs;
