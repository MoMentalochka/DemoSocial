import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = '/dialogs/'+props.id;
    return (

        <NavLink to={path} activeClassName={styles.active}>
             
            <div className={styles.dialog_list_item} >
            <div><img src={props.avatar} alt="Avatar"/></div>
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
    // Данные Пользователей
    let usersData = [ 
        { id : '1', name : 'Franki', second__name : 'Alladay', like_counter : '10', avatar:'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false'},
        { id : '2', name:'Nikolay', second__name : 'Puchinin', like_counter : '11', avatar:'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg'},
        { id : '3', name:'Maksim', second__name : 'Moiseenko', like_counter : '12', avatar:'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg'},
        { id : '4', name:'Ignat', second__name : 'Lesovckiy', like_counter : '13', avatar:'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200'},
        { id : '5', name:'Alexei', second__name : 'Michailov', like_counter : '14', avatar:'http://s019.radikal.ru/i605/1711/34/eada2b97814d.jpg'},
        { id : '6', name:'Oleg', second__name : 'Radzievskiy', like_counter : '15', avatar:'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false'}
        ]

        let MessagesData = [ 
            { id : '1', message:'Franki'},
            { id : '2', message:'Nikolay'},
            { id : '3', message:'Maksim'},
            { id : '4', message:'Ignat'},
            { id : '5', message:'Alexei'},
            { id : '6', message:'Oleg'},
        ]
    
    return (
       
        <div className={styles.dialogs}>

            <div className={styles.dialog_list}>
                <DialogsItem name={usersData[0].name} second__name={usersData[0].second__name} id={usersData[0].id} avatar={usersData[0].avatar}/>
                <DialogsItem name={usersData[1].name} second__name={usersData[1].second__name} id={usersData[1].id} avatar={usersData[1].avatar}/>
                <DialogsItem name={usersData[2].name} second__name={usersData[2].second__name} id={usersData[2].id} avatar={usersData[2].avatar}/>
                <DialogsItem name={usersData[3].name} second__name={usersData[3].second__name} id={usersData[3].id} avatar={usersData[3].avatar}/>
                <DialogsItem name={usersData[4].name} second__name={usersData[4].second__name} id={usersData[4].id} avatar={usersData[4].avatar}/>
                <DialogsItem name={usersData[5].name} second__name={usersData[5].second__name} id={usersData[5].id} avatar={usersData[5].avatar}/>
            </div>
            
            <div className={styles.massages_list}>
               <Message message={MessagesData[0].message} id={MessagesData[0].id} />
               <Message message={MessagesData[1].message} id={MessagesData[1].id}/> 
               <Message message={MessagesData[2].message} id={MessagesData[2].id}/> 
               <Message message={MessagesData[3].message} id={MessagesData[3].id}/> 
               <Message message={MessagesData[4].message} id={MessagesData[4].id}/> 
               <Message message={MessagesData[5].message} id={MessagesData[5].id}/>    
            </div>
        </div>
    ) }
export default Dialogs;