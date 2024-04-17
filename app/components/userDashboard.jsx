// components/UserDashboard.js
import React from 'react';

const UserDashboard = ({ users }) => {
    return (
        
        <div>
            <h1>User Dashboard</h1>
            <form method="post" action="/dashboard">
                <input type="hidden" name="_action" value="create" />
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit">Add User</button>
            </form>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.username} - {user.email}</p>
                    <form method="post" action="/dashboard">
                        <input type="hidden" name="_action" value="update" />
                        <input type="hidden" name="userId" value={user.id} />
                        <input type="text" name="username" defaultValue={user.username} required />
                        <input type="email" name="email" defaultValue={user.email} required />
                        <button type="submit">Update</button>
                    </form>
                    <form method="post" action="/dashboard">
                        <input type="hidden" name="_action" value="delete" />
                        <input type="hidden" name="userId" value={user.id} />
                        <button type="submit">Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default UserDashboard;
