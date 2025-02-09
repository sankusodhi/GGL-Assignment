"use client";

import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import type { User } from "@/types"; 
import { fetchUsers } from "@/utils/api"; 

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        User List
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
