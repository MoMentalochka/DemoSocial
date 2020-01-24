import React , {useState, useEffect} from 'react'
import styles from './Info.module.css';
const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let SetEditMode = (value) => {
        setEditMode(value);
        (!value) && props.updateUserStatus(status)
    }
    
    let onChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div className={styles.status}>
                    <p onDoubleClick={() => SetEditMode(true)}>  {props.status ? props.status : "Изменить статус"} </p>
                </div>
            }
            {editMode &&
                <div className={styles.status}>
                    <input autoFocus onChange={onChange} onBlur={() => SetEditMode(false)} value={status}></input>
                </div>
            }


        </div>

    )
}
export default StatusWithHooks