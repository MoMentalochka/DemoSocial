import React from 'react';
import preloader from '../../Img/preloader.svg';
import styles from './Preloader.module.css';
let Preloader = () => {
    return  <img className = {styles.img} src = {preloader} alt=""/>;
}
export default Preloader;