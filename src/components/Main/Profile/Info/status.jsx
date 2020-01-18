import React from 'react'
import styles from './Info.module.css';
class Status extends React.Component {
   
    state = {
        editMode: false,
        status : this.props.status
    }
    componentDidUpdate(prevProps, prevState){
       
        if (prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
    }
    activateEditMode = () =>{
        this.setState({
            // status : '', 
            editMode : true 
        })
        
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode : false
        })
        this.props.updateUserStatus(this.state.status) 
        
    }
    onChange = (e) =>{
        this.setState({
            status : e.currentTarget.value,
        })
    }
    render() {
        return (
            <div>
            { !this.state.editMode  &&
                    <div className={styles.status}>
                        <p onClick = {()=> {this.activateEditMode()}}>  {this.props.status ? this.props.status : "Изменить статус" } </p>
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