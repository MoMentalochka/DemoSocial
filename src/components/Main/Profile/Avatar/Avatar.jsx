import React from 'react';
import styles from './Avatar.module.css';
import UserPhoto from '../../../../Img/User.jpg' 
import {ProfileApi} from '../../../api/api'

// let update = () =>{
//     let formData = new FormData();
//     let imagefile = document.querySelector('#photo')
//     formData.append('image',imagefile.files[0]);
//     ProfileApi.updatePhoto(formData)
// }

const Avatar = (props) =>{
    return <div className={styles.avatar}>
                   <img src={props.avatar === null ? UserPhoto : props.avatar } alt=""/>
                   {/* <div> <input type="file" id="photo"/> <button onClick={()=>{update()}}>g</button></div> */}
            </div>
            
}
export default Avatar;