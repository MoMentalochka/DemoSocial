import React from 'react';
import styles from './Message.module.css';

    const Message = (props) =>{
        return (
            <div className={styles.massages_list_item}>{props.message}</div>
        )
    }

export default Message;