const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState ={
        
    MessagesData: [
        { id: '1', message: 'First message' },
        { id: '2', message: 'Second massage' },
        { id: '3', message: 'Third message' },
        { id: '4', message: 'Fourth message' },
        { id: '5', message: 'Fifth message' },
    ],

    usersData : [
        { id: '1', name: 'Franki', second__name: 'Alladay', like_counter: '10', avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false' },
        { id: '2', name: 'Nikolay', second__name: 'Puchinin', like_counter: '11', avatar: 'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg' },
        { id: '3', name: 'Maksim', second__name: 'Moiseenko', like_counter: '12', avatar: 'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg' },
        { id: '4', name: 'Ignat', second__name: 'Lesovckiy', like_counter: '13', avatar: 'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200' },
        { id: '5', name: 'Alexei', second__name: 'Michailov', like_counter: '14', avatar: 'https://s1.1zoom.ru/big3/718/422583-blackangel.jpg' },
        { id: '6', name: 'Oleg', second__name: 'Radzievskiy', like_counter: '15', avatar: 'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false' }
    ],
    newMessageText : "",
};
const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:

            return {
                ...state,
                MessagesData: [...state.MessagesData, { id: 6, message: action.message }],
                newMessageText: action.message,
            }
        default:
            return { ...state }
    };

};
// Обработчики событий Dialogs
export const AddMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message });


        
export default dialogReducer;