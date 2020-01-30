import React from 'react'
import { Field } from 'redux-form';

export const FieldCreator = ({type, name, placeholder="Write something", component, validate = []}) =>{
    return(
        <div>
            <Field type={type}
                name={name}
                placeholder={placeholder}
                component={component}
                validate={[...validate]}
            />
        </div>
    )
}
