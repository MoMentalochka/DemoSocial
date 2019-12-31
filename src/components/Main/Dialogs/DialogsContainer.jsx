import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
let mapStateToProps = (StateCopy)=>{
    let DialogsItems=
    StateCopy.dialogsPage.usersData.map(u => <DialogsItem key={u.id} name={u.name} second__name={u.second__name} id={u.id} avatar={u.avatar}/>);
    let Messages=
    StateCopy.dialogsPage.MessagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>);
    
    return {
        DialogsItems : DialogsItems,
        Messages : Messages,
        newMessageText :  StateCopy.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        dispatch : dispatch
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
