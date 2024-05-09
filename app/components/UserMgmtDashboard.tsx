// components/UserMgmtDashboard.tsx
'use client'
import { useState } from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import UserForm from './userForm'
import UserList from './userList';

const UserDashboard = ({ initialUsers }: { initialUsers: any[] }) => { // Fix the type declaration

    const [users, setUsers] = useState(initialUsers || []);
    const [editUser, setEditUser] = useState(null);

    // Save or update user
    const handleSave = async (formData: any) => {
        const method = editUser ? 'PUT' : 'POST';
        const url = editUser ? `http://localhost:8000/api/users/${(editUser as any).id}` : `http://localhost:8000/api/users/`;

        try {
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.JWT_TOKEN}`
                },
                body: JSON.stringify(formData)
            });

            const [editUser, setEditUser] = useState< any | null>(null);
        } catch (error:any) { // Remove the type annotation
            console.error('Error saving user:', error.message);
        }
    };

    // Delete user
    // const handleDelete = async (userId: string) => {
    //     try {
    //         const res = await fetch(`http://localhost:8000/api/users/${userId}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Authorization': `Bearer ${process.env.JWT_TOKEN}`
    //             }
    //         });
    //         if (!res.ok) throw new Error('Failed to delete the user.');

    //         setUsers(users.filter(user => user.id !== userId));
    //     } catch (error) {
    //         console.error('Error deleting user:', error.message);
    //     }
    // };

    // Edit user function definition
    const handleDelete = async (id: number) => { // Change the parameter type from 'userId: string' to 'id: number'
        try {
            const res = await fetch(`http://localhost:8000/api/users/${id}`, { // Update the URL parameter
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${process.env.JWT_TOKEN}`
                }
            });
            if (!res.ok) throw new Error('Failed to delete the user.');

            setUsers(users.filter(user => user.id !== id));
        } catch (error: any) { // Explicitly type the 'error' parameter as 'any'
            console.error('Error deleting user:', error.message);
        }
    };

    // Edit user function definition
    const handleEdit = (user:any) => {
        setEditUser(user);
    };

    return (
        <VStack spacing={4}>
            <Heading>User Management Dashboard</Heading>
            <UserForm onSave={handleSave} />
            <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </VStack>
    );
};

export default UserDashboard;
