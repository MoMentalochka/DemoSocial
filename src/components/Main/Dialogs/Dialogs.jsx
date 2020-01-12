import React from 'react';
import styles from './Dialogs.module.css';
import FormContainer from './Message/Form/FormContainer';


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_list}>
               { props.DialogsItems }
            </div>
            <div className={styles.massages_list}>
                { props.Messages }
            </div>
            <FormContainer newMessageText = {props.newMessageText}  dispatch = { props.dispatch} />
            
        </div>
    ) 
}
export default Dialogs;
