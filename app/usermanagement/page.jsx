// app/page.js
import React from 'react';
import UserDashboard from '../components/UserMgmtDashboard';

const fetchUsers = async (skip = 0, limit = 10) => {
    const token = process.env.JWT_TOKEN;

    try{
    const res = await fetch(`NEXT_PUBLIC_API_URl/users/?skip=${skip}&limit=${limit}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) {
        // If the response is not ok, throw an error to trigger the nearest error boundary
        throw new Error('Failed to fetch users');
    }
    const data  = await res.json();
    return data;
}catch(error){
    console.error('Error fetching users:', error);
    return { items: [], pagination: {} };
    }
};

// The main component for the page, executed server-side
export default async function Page() {
    try {
        const { items: users, pagination } = await fetchUsers();  // Destructure to get users and pagination

        // Render the component with fetched data
        return (
            <main>
                <h1>User Management</h1>
                <UserDashboard users={users} />
                {users.length > 0 ? (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.username} - {user.email}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No users found.</p>
                )}
            </main>
        );
    } catch (error) {
        // If there's an error in fetching data, we display an error message
        console.error('Error fetching users:', error);
        return (
            <main>
                <h1>Error</h1>
                <p>Could not load user data. Please try again later.</p>
            </main>
        );
    }
}