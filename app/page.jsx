// app/page.js
import React from 'react';
import UserDashboard from './components/userDashboard';

// Asynchronous function to fetch user data from the backend
async function fetchUsers() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxMzM2Njk1M30.BwSOtyuL0jiAMka1VhSc2AjRQZL8XugQxSQsgyoMiwk';

    const res = await fetch('http://localhost:8000/api/users/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!res.ok) {
        // If the response is not ok, throw an error to trigger the nearest error boundary
        throw new Error('Failed to fetch users');
    }

    // Parse the JSON response
    return res.json();
}

// The main component for the page, executed server-side
export default async function Page() {
    try {
        // Retrieve user data via the fetchUsers function
        const users = await fetchUsers();

        // Render the component with fetched data
        return (
            <main>
                <h1>User Dashboard</h1>
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
