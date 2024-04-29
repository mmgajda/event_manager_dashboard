import fetch from 'isomorphic-unfetch';

const API_URL = 'http://localhost:8000/users'; // URL of your FastAPI

export default async function handler(req, res) {
    const { id } = req.query;
    const response = await fetch(`${API_URL}/${id}`, {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: ['PUT', 'DELETE'].includes(req.method) ? JSON.stringify(req.body) : null
    });
    if (!response.ok) {
        return res.status(response.status).json({ message: 'Error from backend' });
    }
    const data = await response.json();
    res.status(200).json(data);
}
