export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Assume a function fetchUsersFromDB() that fetches users from your database
            const users = await fetchUsersFromDB();
            res.status(200).json(users);
        } catch (error) {
            console.error('Failed to fetch users:', error);
            res.status(500).json({ message: 'Failed to fetch users' });
        }
    } else {
        // Optionally handle other methods or return an error for unsupported ones
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
