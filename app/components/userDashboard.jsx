'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { color } from 'framer-motion';

const UserDashboard = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('http://localhost:8000/api/users/');
            setUsers(response.data);
        } catch (err) {
            setError('Failed to fetch users. Please try again later.');
            console.error('Error fetching users:', err);
        }
        setLoading(false);
    };

    const handleAddOrUpdateUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const userData = { username, email };
            let response;
            if (selectedUser) {
                response = await axios.put(`http://localhost:8000/api/users/${selectedUser.id}`, userData);
                setUsers(users.map(user => user.id === selectedUser.id ? response.data : user));
            } else {
                response = await axios.post('http://localhost:8000/api/users/', userData);
                setUsers([...users, response.data]);
            }
            setUsername('');
            setEmail('');
            setSelectedUser(null);
        } catch (err) {
            setError('Failed to save user. Please check the data and try again.');
            console.error('Error saving user:', err);
        }
        setLoading(false);
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setUsername(user.username);
        setEmail(user.email);
    };

    const handleDelete = async (userId) => {
        setLoading(true);
        try {
            await axios.delete(`http://localhost:8000/api/users/${userId}`);
            setUsers(users.filter(user => user.id !== userId));
        } catch (err) {
            setError('Failed to delete user. Please try again.');
            console.error('Error deleting user:', err);
        }
        setLoading(false);
    };

    return (
        <div>
            <h1>User Dashboard</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading ? <p>Loading...</p> : (
                <>
                    <form onSubmit={handleAddOrUpdateUser}>
                        <input                            
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <button type="submit">{selectedUser ? 'Update User' : 'Add User'}</button>
                    </form>
                    {selectedUser && (
                        <button onClick={() => setSelectedUser(null)}>Cancel Edit</button>
                    )}
                    <ul>
                        {users.length > 0 ? (
                            users.map(user => (
                                <li key={user.id}>
                                    {user.username} - {user.email}
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </li>
                            ))
                        ) : (
                            <p>No users found.</p>
                        )}
                    </ul>
                </>
            )}
        </div>
    );
};

export default UserDashboard;
