'use client'
import React, { useState } from 'react';
import { Stack, Input } from '@chakra-ui/react'

const UserDashboard = ({ initialUsers }) => {
    const [users, setUsers] = useState(initialUsers || []);
    const [editUser, setEditUser] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        full_name: '',
        bio: '',
        profile_picture_url: '',
        password: ''  
    });

    // Handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

// Add or update user
const handleSave = async () => {
    const method = editUser ? 'PUT' : 'POST';
    const url = editUser ? `http://localhost:8000/api/users/${editUser.id}` : 'http://localhost:8000/api/users/';

    console.log("Sending data:", formData);  // Debug: Log data being sent

    try {
        const res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.JWT_TOKEN}`
            },
            body: JSON.stringify(formData)
        });

        if (!res.ok) {
            const errorResponse = await res.json();
            console.error('Failed to process the user:', errorResponse);
            throw new Error(errorResponse.detail || 'Unknown error occurred');
        }

        const newUser = await res.json();
        if (editUser) {
            setUsers(users.map(user => user.id === editUser.id ? newUser : user));
        } else {
            setUsers([...users, newUser]);
        }
        // Reset form
        setEditUser(null);
        setFormData({ username: '', email: '', full_name: '', bio: '', profile_picture_url: '', password: '' }); // Clear password after submit
    } catch (error) {
        console.error('Error processing user:', error.message);
    }
};


    // Delete user
    const handleDelete = async (userId) => {
        try {
            const res = await fetch(`http://localhost:8000/api/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${process.env.JWT_TOKEN}`
                }
            });
            if (!res.ok) throw new Error('Failed to delete the user.');

            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Set user to edit
    const handleEdit = (user) => {
        setEditUser(user);
        setFormData({
            username: user.username,
            email: user.email,
            full_name: user.full_name || '',
            bio: user.bio || '',
            profile_picture_url: user.profile_picture_url || ''
        });
    };

    // Clear form
    const handleCancel = () => {
        setEditUser(null);
        setFormData({ username: '', email: '', full_name: '', bio: '', profile_picture_url: '' });
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Stack spacing={3}>
                <Input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" required />
                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required /> 
                <Input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" required/> 
                <Input type="text" name="full_name" value={formData.full_name} onChange={handleInputChange} placeholder="Full Name" /> 
                <Input type="text" name="bio" value={formData.bio} onChange={handleInputChange} placeholder="Bio" />
                <Input type="text" name="profile_picture_url" value={formData.profile_picture_url} onChange={handleInputChange} placeholder="URl of Profile Picture" />
                <button onClick={handleSave}>{editUser ? 'Update User' : 'Add User'}</button>
                {editUser && <button onClick={handleCancel}>Cancel</button>}
            </Stack>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;
