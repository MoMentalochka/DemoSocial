import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post'

const Posts = () =>{
        // Данные для поста
    let PostsData = [ 
        { id : '1', name : 'Franki', second__name : 'Alladay', like_counter : '10', avatar:'https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false'},
        { id : '2', name:'Nikolay', second__name : 'Puchinin', like_counter : '11', avatar:'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg'},
        { id : '3', name:'Maksim', second__name : 'Moiseenko', like_counter : '12', avatar:'https://pets-expert.ru/wp-content/uploads/2018/09/Манчкин-с-бирюзовыми-глазами.jpg'},
        { id : '4', name:'Ignat', second__name : 'Lesovckiy', like_counter : '13', avatar:'https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200'},
        { id : '5', name:'Alexei', second__name : 'Michailov', like_counter : '14', avatar:'http://s019.radikal.ru/i605/1711/34/eada2b97814d.jpg'},
        { id : '6', name:'Oleg', second__name : 'Radzievskiy', like_counter : '15', avatar:'https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false'}
    ]

    return (
        <div className={styles.posts}>
            <Post message="Привет, я первый пропс" id={PostsData[0].id} like_counter={PostsData[0].like_counter} name={PostsData[0].name} second__name={PostsData[0].second__name} avatar={PostsData[0].avatar} />
            <Post message="Привет, я второй пропс" id={PostsData[1].id} like_counter={PostsData[1].like_counter} name={PostsData[1].name} second__name={PostsData[1].second__name} avatar={PostsData[1].avatar} />
            <Post message="Привет, я третий пропс" id={PostsData[2].id} like_counter={PostsData[2].like_counter} name={PostsData[2].name} second__name={PostsData[2].second__name} avatar={PostsData[2].avatar} />
            <Post message="Привет, я четвёртый пропс" id={PostsData[3].id} like_counter={PostsData[3].like_counter} name={PostsData[3].name} second__name={PostsData[3].second__name} avatar={PostsData[3].avatar} />
            <Post message="Привет, я пятый пропс" id={PostsData[4].id} like_counter={PostsData[4].like_counter} name={PostsData[4].name} second__name={PostsData[4].second__name} avatar={PostsData[4].avatar} />
        </div>
    )
    
}
export default Posts;