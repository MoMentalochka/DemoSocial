import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = '/dialogs/'+props.id;
    return (
        <NavLink to={path} activeClassName={styles.active}>
            <div className={styles.dialog_list_item} >
                {props.name}
            </div>
        </NavLink>
            )
}
const Message = (props) =>{
    return(
        <div className={styles.massages_list_item}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
       
        <div className={styles.dialogs}>

            <div className={styles.dialog_list}>
                <DialogsItem name='Franki' id='1'/>
                <DialogsItem name='Nikolay' id='2'/>
                <DialogsItem name='Maksim' id='3'/>
                <DialogsItem name='Ignat' id='4'/>
                <DialogsItem name='Alexey' id='5'/>
                <DialogsItem name='Oleg' id='6'/>
            </div>
            
            <div className={styles.massages_list}>
               <Message message='Привет!'/>
               <Message message='Хэлоу!'/> 
               <Message message='Хай!'/> 
               <Message message='Aloha!'/> 
               <Message message='Hello!'/> 
               <Message message='Hi!'/>    
            </div>
        </div>
    ) }
export default Dialogs;