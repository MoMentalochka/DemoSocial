import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../../../FormControlers/FormComponents';
import { required, maxlength } from './../../../Validation/validators';
import { FieldCreator } from './../../../common/FieldCreator';

const addForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <FieldCreator name="post"
                component={Textarea}
                type={'textarea'}
                validate={[required, maxlength]}
            />
        </form>
    )
}
const PostReduxForm = reduxForm({ form: 'post', })(addForm);

const Posts = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.post);
        console.log(formData);
        formData.post = '';
    }
    return (
        <div >
            <PostReduxForm onSubmit={onSubmit} />
            {props.PostElements}
        </div>
    )

}
export default Posts;