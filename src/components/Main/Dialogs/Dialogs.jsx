import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    // Данные Пользователей
  
        // Массив Диалогов
    let DialogsItems=
        props.dialogsPage.usersData.map(u => <DialogsItem name={u.name} second__name={u.second__name} id={u.id} avatar={u.avatar}/>);
    let Messages=
        props.dialogsPage.MessagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();
    let addMessage = () =>{
        let text = newMessage.current.value;
        alert(text);
    }
    return (
       
        <div className={styles.dialogs}>
            <div className={styles.dialog_list}>
            
               {DialogsItems}

            </div>
            <div className={styles.massages_list}>

             { Messages }

             <div className="Form">
                <textarea ref = {newMessage}/>
                <input type="button" onClick={addMessage} value="Отправить"/></div>
            </div>
        </div>
    ) }
export default Dialogs;
