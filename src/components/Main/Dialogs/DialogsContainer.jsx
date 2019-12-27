import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
let mapStateToProps = (state)=>{
    
    let DialogsItems=
    state.dialogsPage.usersData.map(u => <DialogsItem name={u.name} second__name={u.second__name} id={u.id} avatar={u.avatar}/>);
    let Messages=
    state.dialogsPage.MessagesData.map(m => <Message message={m.message} id={m.id}/>);
    
    return {
        DialogsItems : DialogsItems,
        Messages : Messages,
        newMessageText :  state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        dispatch : dispatch
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
