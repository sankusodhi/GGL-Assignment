'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import { Container, Grid, Paper, TextField, Button, Typography } from '@mui/material';

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = () => {
  // State initialization
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [showList, setShowList] = useState(true);

  // This effect will only run in the browser
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      setUsers(savedUsers);
    }
  }, []);

  useEffect(() => {
    // Save users to localStorage whenever users state changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, [users]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, userWithId]);
    setNewUser({ name: '', email: '' });
  };

  return (
    <>
      <Navbar /> {/* Added Navbar at the top */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <Typography variant="h6" gutterBottom>
                User List
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ mb: 2 }} 
                onClick={() => setShowList(!showList)}
              >
                {showList ? "Hide User List" : "Show User List"}
              </Button>
              {showList && (
                <ul>
                  {users.map((user: User) => (
                    <li key={user.id}>
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <Typography variant="h6" gutterBottom>
                Add New User
              </Typography>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <TextField
                  label="Name"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  Add User
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UsersPage;
