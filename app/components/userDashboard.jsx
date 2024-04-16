// components/UserDashboard.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch users:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const addUser = async (user) => {
        try {
            const response = await axios.post('/api/users', user);
            setUsers([...users, response.data]);
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    };

    const updateUser = async (user) => {
        try {
            const response = await axios.put(`/api/users/${user.id}`, user);
            const updatedUsers = users.map(u => u.id === user.id ? response.data : u);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`/api/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User Dashboard</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;
