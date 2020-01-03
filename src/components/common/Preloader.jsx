import preloader from '../../Img/preloader.svg'
import React from 'react';
import styles from './Preloader.module.css'
let Preloader = (props) => {
    return(
        <img className = {styles.img} src = {preloader} />
    )
}
export default Preloader