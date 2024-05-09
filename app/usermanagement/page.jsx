import { Heading, Image } from '@chakra-ui/react';
import UserDashboard from '../components/UserMgmtDashboard';
import Hero2 from '../components/Hero2';

const fetchUsers = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
            headers: {
                'Authorization': `Bearer ${process.env.JWT_TOKEN}`
            }
        });
        if (!res.ok) throw new Error('Failed to fetch users.');
        return res.json();
    } catch (error) {
        console.error('Error fetching users:', error.message);
        return [];
    }
};

export default async function AdminPage() {
    const users = await fetchUsers();

    return (
        <>
        <Hero2 />
            
            <Heading mb={4}>Welcome, Admin User!</Heading>

            {/* User Management Dashboard */}
            <UserDashboard initialUsers={users} />
        </>
    );
}
