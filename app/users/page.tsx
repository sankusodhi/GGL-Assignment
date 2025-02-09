'use client';

import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button, TextField } from "@mui/material";

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Swati', email: 'swati@example.com' },
    { id: 2, name: 'Saru', email: 'saru@example.com' },
  ]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [showList, setShowList] = useState(true); 
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
                {users.map((user) => (
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
  );
};

export default UsersPage;
