import fetch from 'isomorphic-unfetch';

const API_URL = 'http://localhost:8000/users'; // URL of your FastAPI

export default async function handler(req, res) {
    const response = await fetch(API_URL, {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: req.method !== 'GET' ? JSON.stringify(req.body) : null
    });
    const data = await response.json();
    res.status(response.status).json(data);
}

