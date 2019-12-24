const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogReducer = (state, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.MessagesData.push(newMessage);
            state.newMessageText = "";
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;

        default:
            return state;
    }
}

        // Обработчики событий Dialogs
        export const AddMessageActionCreator = () => ({type : ADD_MESSAGE});
        export const UpdateNewMessageTextActionCreator = (text) =>{
            return(
            {type : UPDATE_NEW_MESSAGE_TEXT,
            message : text})
        };

        
export default dialogReducer;