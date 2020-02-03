import React, { useEffect } from 'react';
import styles from './Paginator.module.css';
import { useState } from 'react';


 export let Pagination = (props) =>{

//========= Определяем Local State =========
    let [blokNumber, setBlokNumber] = useState(1);

//========= Определяем текущий блок в завизимости от номера страницы =========

    let PagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= PagesCount; i++) {
        pages.push(i)
    }

//====== Параметры (размер, границы, создаём текущий блок страниц) ============
    let blokSize = props.blokSize || 10;
    let leftbar = (blokNumber - 1) * blokSize + 1;
    let rightbar = (blokNumber) * blokSize;
    let Paginator =
        pages.filter(p => p >= leftbar && p <= rightbar).map(p => { return <span key={p} className={props.currentPage === p ? styles.activePage : styles.Page} onClick={() => props.setCurrentPage(p)}> {p} </span> })

        useEffect(() => {
            setBlokNumber(Math.ceil(props.currentPage / blokSize))
        }, [props.currentPage, blokSize])

        //====== возвращием готовый JSX ============
        return (
            <div>
                {blokNumber > 1 && <button className={styles.btn} onClick={() => { setBlokNumber(blokNumber - 1); props.setCurrentPage(leftbar - 1) }}>Назад</button>}
                {Paginator}
                {blokNumber < Math.ceil(pages.length / blokSize) && <button className={styles.btn} onClick={() => { setBlokNumber(blokNumber + 1); props.setCurrentPage(leftbar + blokSize) }}>Вперёд</button>}
            </div>
        )
}
export default Pagination;