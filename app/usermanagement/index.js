'use client'
import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    {user.username} - {user.email}
                </div>
            ))}
            <UserForm />
        </div>
    );
};

export default Users;
