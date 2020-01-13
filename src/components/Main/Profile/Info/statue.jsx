import React from 'react'
import styles from './Info.module.css';

class Status extends React.Component {
    statustext = React.createRef()
    state = {
        editMode: false,
        status : 'Изменить статус',
    }

    activateEditMode = () =>{
        this.setState({
            status : '',
            editMode : true 
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode : false
        })
    }
    onChange = () =>{
        let text = this.statustext.current.value
        this.setState({
            status : text
        })
    }
    render() {
        return (
            <div>
            { !this.state.editMode  &&
                    <div className={styles.status}>
                        <p onClick = {()=> {this.activateEditMode()}}>{this.state.status.trim() !='' ? this.state.status : 'Изменить статус'}</p>
                    </div> 
            }
            {   this.state.editMode  &&
                    <div className={styles.status}>
                        <input ref={this.statustext} autoFocus onBlur = {()=> {this.deactivateEditMode()}} onChange={this.onChange} value={this.state.status} ></input>
                    </div>
            }

                
            </div>

        )
    }
}
export default Status 