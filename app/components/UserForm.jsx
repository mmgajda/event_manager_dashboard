import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ onSubmit }) => {
    const { register, handleSubmit, errors } = useForm();
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="username" ref={register({ required: true })} placeholder="Username" />
            <input name="email" ref={register({ required: true })} placeholder="Email" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
