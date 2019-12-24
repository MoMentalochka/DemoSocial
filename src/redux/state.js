import profileReducer from "./ProfileReducer";
import dialogReducer from './DialogReducer'



        // Глобальный Store
let store ={
 _state : {
        profilePage: {
            
                PostsData : [
                    { id: '1', name: 'Franki', message: 'Franki', second__name: 'Alladay', like_counter: '10', avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false' },
                    { id: '2', name: 'Nikolay', message: 'Franki',second__name: 'Puchinin', like_counter: '11', avatar: 'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg' },
                    { id: '3', name: 'Maksim',message: 'Franki', second__name: 'Moiseenko', like_counter: '12', avatar: 'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg' },
                    { id: '4', name: 'Ignat',message: 'Franki', second__name: 'Lesovckiy', like_counter: '13', avatar: 'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200' },
                    { id: '5', name: 'Alexei',message: 'Franki', second__name: 'Michailov', like_counter: '14', avatar: 'http://s019.radikal.ru/i605/1711/34/eada2b97814d.jpg' },
                    { id: '6', name: 'Oleg',message: 'Franki', second__name: 'Radzievskiy', like_counter: '15', avatar: 'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false' }
                ],
                FriendsData : [
                    { id: '1', name: 'Franki', second__name: 'Alladay', avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false' },
                    { id: '2', name: 'Nikolay', second__name: 'Puchinin', avatar: 'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg' },
                    { id: '3', name: 'Maksim', second__name: 'Moiseenko', avatar: 'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg' },
                    { id: '4', name: 'Ignat', second__name: 'Lesovckiy',  avatar: 'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200' },
                    { id: '5', name: 'Alexei', second__name: 'Michailov', avatar: 'http://s019.radikal.ru/i605/1711/34/eada2b97814d.jpg' },
                    { id: '6', name: 'Oleg', second__name: 'Radzievskiy',  avatar: 'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false' }
                ],
                newPostText : "",
            },
            
        dialogsPage: {
        
                MessagesData: [
                    { id: '1', message: 'First message' },
                    { id: '2', message: 'Second massage' },
                    { id: '3', message: 'Third message' },
                    { id: '4', message: 'Fourth message' },
                    { id: '5', message: 'Fifth message' },
                    { id: '6', message: 'sexth message' },
                ],
        
                usersData : [
                    { id: '1', name: 'Franki', second__name: 'Alladay', like_counter: '10', avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false' },
                    { id: '2', name: 'Nikolay', second__name: 'Puchinin', like_counter: '11', avatar: 'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg' },
                    { id: '3', name: 'Maksim', second__name: 'Moiseenko', like_counter: '12', avatar: 'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg' },
                    { id: '4', name: 'Ignat', second__name: 'Lesovckiy', like_counter: '13', avatar: 'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200' },
                    { id: '5', name: 'Alexei', second__name: 'Michailov', like_counter: '14', avatar: 'http://s019.radikal.ru/i605/1711/34/eada2b97814d.jpg' },
                    { id: '6', name: 'Oleg', second__name: 'Radzievskiy', like_counter: '15', avatar: 'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false' }
                ],
                newMessageText : "",

    
    },    
    },
    // Обединяет методы изменяющие UI
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._CallSubscriber(this._state);
    },    

    subscriber(observer){
        this._CallSubscriber = observer;
    },
    _CallSubscriber (){
        // Функция определется обсервером из index.js
    },
    getstate(){
        return this._state;
    },

    };
    
            // Обработчики событий Posts
   


    window.store = store;
export default store;