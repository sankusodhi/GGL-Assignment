
"use client";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openContact, setOpenContact] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleContactOpen = () => {
    setOpenContact(true);
  };
  const handleContactClose = () => {
    setOpenContact(false);
  };
  const handleAuthOpen = () => {
    setOpenAuth(true);
  };
  const handleAuthClose = () => {
    setOpenAuth(false);
  };
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
    setOpenContact(false);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            User Management
          </Typography>
          <IconButton edge="end" color="inherit" onClick={handleMenuOpen} sx={{ display: { xs: "block", sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleAuthOpen}>Home</MenuItem>
            <MenuItem onClick={handleContactOpen}>Contact</MenuItem>
            <MenuItem component={Link} href="/users">Get Started</MenuItem>
          </Menu>
          <Button color="inherit" onClick={handleAuthOpen}>Home</Button>
          <Button color="inherit" onClick={handleContactOpen}>Contact</Button>
          <Button color="inherit" component={Link} href="/users">Get Started</Button>
        </Toolbar>
      </AppBar>
      <Dialog open={openContact} onClose={handleContactClose} maxWidth="sm" fullWidth>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField label="Name" name="name" fullWidth margin="normal" required value={formData.name} onChange={handleChange} />
            <TextField label="Email" name="email" type="email" fullWidth margin="normal" required value={formData.email} onChange={handleChange} />
            <TextField label="Message" name="message" multiline rows={4} fullWidth margin="normal" required value={formData.message} onChange={handleChange} />
            <DialogActions>
              <Button onClick={handleContactClose} color="secondary">Cancel</Button>
              <Button type="submit" variant="contained" color="primary">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={openAuth} onClose={handleAuthClose} maxWidth="sm" fullWidth>
        <DialogTitle>Authentication</DialogTitle>
        <DialogContent>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
          </Tabs>

          {tabValue === 0 ? (
            <Box component="form" sx={{ mt: 2 }}>
              <TextField label="Email" fullWidth margin="normal" />
              <TextField label="Password" type="password" fullWidth margin="normal" />
              <DialogActions>
                <Button onClick={handleAuthClose} color="secondary">Cancel</Button>
                <Button variant="contained" color="primary">Sign In</Button>
              </DialogActions>
            </Box>
          ) : (
            <Box component="form" sx={{ mt: 2 }}>
              <TextField label="Full Name" fullWidth margin="normal" />
              <TextField label="Email" fullWidth margin="normal" />
              <TextField label="Password" type="password" fullWidth margin="normal" />
              <DialogActions>
                <Button onClick={handleAuthClose} color="secondary">Cancel</Button>
                <Button variant="contained" color="primary">Sign Up</Button>
              </DialogActions>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}