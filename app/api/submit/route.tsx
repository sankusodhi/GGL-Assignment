
import { NextResponse } from 'next';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];
export async function POST(req: Request) {
  try {
    const newUser = await req.json();
    users.push(newUser);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error submitting user:', error);
    return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
  }
}
export async function GET() {
  try {
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
}


