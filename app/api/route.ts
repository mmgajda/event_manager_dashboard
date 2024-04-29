import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // Handle GET requests
    const data = { message: 'Hello from the API route!' };
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    // Handle POST requests
    const body = await request.json();
    // Process the request body
    // ...
    return NextResponse.json({ success: true });
}
