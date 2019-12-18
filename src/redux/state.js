import {Rerender} from '../Render';
let state = {
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
        },
        
    dialogsPage: {
    
            MessagesData: [
                { id: '1', message: 'Franki' },
                { id: '2', message: 'Nikolay' },
                { id: '3', message: 'Maksim' },
                { id: '4', message: 'Ignat' },
                { id: '5', message: 'Alexei' },
                { id: '6', message: 'Oleg' },
            ],
       
            usersData : [
                { id: '1', name: 'Franki', second__name: 'Alladay', like_counter: '10', avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false' },
                { id: '2', name: 'Nikolay', second__name: 'Puchinin', like_counter: '11', avatar: 'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg' },
                { id: '3', name: 'Maksim', second__name: 'Moiseenko', like_counter: '12', avatar: 'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg' },
                { id: '4', name: 'Ignat', second__name: 'Lesovckiy', like_counter: '13', avatar: 'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200' },
                { id: '5', name: 'Alexei', second__name: 'Michailov', like_counter: '14', avatar: 'http://s019.radikal.ru/i605/1711/34/eada2b97814d.jpg' },
                { id: '6', name: 'Oleg', second__name: 'Radzievskiy', like_counter: '15', avatar: 'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false' }
            ],
  
}

}

export let addPost = (PostMessage) => {
    let newPost = {
        id: 6,
        name: 'Franki',
        second__name: 'Alladay',
        like_counter: 0,
        message: PostMessage,
        avatar: 'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false'
    }
    state.profilePage.PostsData.push(newPost);
    Rerender(state);
}
export default state;