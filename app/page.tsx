
import axios from 'axios';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
  // Add other user fields as necessary
}

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:8000/users'); // Adjust URL as necessary
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Admin Dashboard</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      {/* Add buttons or links for creating, updating, and deleting users */}
    </div>
  );
};

export default Home;
