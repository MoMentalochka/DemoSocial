import React from 'react'
import styles from './FormComponents.module.css'

export const Textarea = ({input,meta, ...props}) =>{
    let withError = (meta.touched && meta.error );
    return (<>
        <div className={styles.formT + ' ' + ( withError && styles.withError) } >
            <textarea {...input} {...props} className = {styles.textarea} />
            <button className={styles.button + ' ' + ( withError && styles.withError) } disabled = {withError}> Отправить </button>
            
            
            
        </div>
        {withError && <div className= {styles.error}> {meta.error} </div>}
        </>
    )
   
}  


export const Input = ({input,meta, ...props}) =>{
    let withError = (meta.touched && meta.error);
        return (<>
        <div className={styles.formI} >
            <input {...input} {...props} className={styles.login + ' ' + ( withError && styles.withError)}/>
        </div>
        {withError && <div className= {styles.error}> {meta.error} </div>}
        </>
    )
   
}  