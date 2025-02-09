// "use client";
// import Link from "next/link";
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";

// export default function Navbar() {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           User Management
//         </Typography>
        
//         {/* Mobile Menu */}
//         <IconButton edge="end" color="inherit" onClick={handleMenuOpen} sx={{ display: { xs: "block", sm: "none" } }}>
//           <MenuIcon />
//         </IconButton>
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//           <MenuItem component={Link} href="/" onClick={handleMenuClose}>Home</MenuItem>
//           <MenuItem component={Link} href="/contact" onClick={handleMenuClose}>Contact</MenuItem>
//           <MenuItem component={Link} href="/get-started" onClick={handleMenuClose}>Get Started</MenuItem>
//         </Menu>

//         {/* Desktop Navigation */}
//         <Button color="inherit" component={Link} href="/" sx={{ display: { xs: "none", sm: "block" } }}>Home</Button>
//         <Button color="inherit" component={Link} href="/contact" sx={{ display: { xs: "none", sm: "block" } }}>Contact</Button>
//         <Button color="inherit" component={Link} href="/get-started" sx={{ display: { xs: "none", sm: "block" } }}>Get Started</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// "use client";
// import Link from "next/link";
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";

// export default function Navbar() {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   // Navbar Menu Handlers
//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   // Contact Form Handlers
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Thank you for contacting us!");
//     setFormData({ name: "", email: "", message: "" });
//     setOpen(false);
//   };

//   return (
//     <>
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             User Management
//           </Typography>

//           {/* Mobile Menu */}
//           <IconButton edge="end" color="inherit" onClick={handleMenuOpen} sx={{ display: { xs: "block", sm: "none" } }}>
//             <MenuIcon />
//           </IconButton>
//           <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//             <MenuItem component={Link} href="/">Home</MenuItem>
//             <MenuItem onClick={handleClickOpen}>Contact</MenuItem>
//             <MenuItem component={Link} href="/users">Get Started</MenuItem>  {/* Users page link added */}
//           </Menu>

//           {/* Desktop Navigation */}
//           <Button color="inherit" component={Link} href="/">Home</Button>
//           <Button color="inherit" onClick={handleClickOpen}>Contact</Button>
//           <Button color="inherit" component={Link} href="/users">Get Started</Button> {/* Users page link added */}
//         </Toolbar>
//       </AppBar>

//       {/* Contact Form Dialog */}
//       <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//         <DialogTitle>Contact Us</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <TextField label="Name" name="name" fullWidth margin="normal" required value={formData.name} onChange={handleChange} />
//             <TextField label="Email" name="email" type="email" fullWidth margin="normal" required value={formData.email} onChange={handleChange} />
//             <TextField label="Message" name="message" multiline rows={4} fullWidth margin="normal" required value={formData.message} onChange={handleChange} />
//             <DialogActions>
//               <Button onClick={handleClose} color="secondary">Cancel</Button>
//               <Button type="submit" variant="contained" color="primary">Submit</Button>
//             </DialogActions>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }


// "use client";
// import Link from "next/link";
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Tabs, Tab, Box } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";

// export default function Navbar() {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [openContact, setOpenContact] = useState(false);
//   const [openAuth, setOpenAuth] = useState(false);
//   const [tabValue, setTabValue] = useState(0);
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   // Navbar Menu Handlers
//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   // Contact Form Handlers
//   const handleContactOpen = () => {
//     setOpenContact(true);
//   };
//   const handleContactClose = () => {
//     setOpenContact(false);
//   };

//   // Auth Form Handlers
//   const handleAuthOpen = () => {
//     setOpenAuth(true);
//   };
//   const handleAuthClose = () => {
//     setOpenAuth(false);
//   };

//   // Tab Change Handler (Sign In & Sign Up)
//   const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
//     setTabValue(newValue);
//   };

//   // Form Handling
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Thank you for contacting us!");
//     setFormData({ name: "", email: "", message: "" });
//     setOpenContact(false);
//   };

//   return (
//     <>
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             User Management
//           </Typography>

//           {/* Mobile Menu */}
//           <IconButton edge="end" color="inherit" onClick={handleMenuOpen} sx={{ display: { xs: "block", sm: "none" } }}>
//             <MenuIcon />
//           </IconButton>
//           <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//             <MenuItem onClick={handleAuthOpen}>Home</MenuItem>
//             <MenuItem onClick={handleContactOpen}>Contact</MenuItem>
//             <MenuItem component={Link} href="/users">Get Started</MenuItem>
//           </Menu>

//           {/* Desktop Navigation */}
//           <Button color="inherit" onClick={handleAuthOpen}>Home</Button>
//           <Button color="inherit" onClick={handleContactOpen}>Contact</Button>
//           <Button color="inherit" component={Link} href="/users">Get Started</Button>
//         </Toolbar>
//       </AppBar>

//       {/* Contact Form Dialog */}
//       <Dialog open={openContact} onClose={handleContactClose} maxWidth="sm" fullWidth>
//         <DialogTitle>Contact Us</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <TextField label="Name" name="name" fullWidth margin="normal" required value={formData.name} onChange={handleChange} />
//             <TextField label="Email" name="email" type="email" fullWidth margin="normal" required value={formData.email} onChange={handleChange} />
//             <TextField label="Message" name="message" multiline rows={4} fullWidth margin="normal" required value={formData.message} onChange={handleChange} />
//             <DialogActions>
//               <Button onClick={handleContactClose} color="secondary">Cancel</Button>
//               <Button type="submit" variant="contained" color="primary">Submit</Button>
//             </DialogActions>
//           </form>
//         </DialogContent>
//       </Dialog>

//       {/* Sign In & Sign Up Dialog */}
//       <Dialog open={openAuth} onClose={handleAuthClose} maxWidth="sm" fullWidth>
//         <DialogTitle>Authentication</DialogTitle>
//         <DialogContent>
//           <Tabs value={tabValue} onChange={handleTabChange} centered>
//             <Tab label="Sign In" />
//             <Tab label="Sign Up" />
//           </Tabs>

//           {tabValue === 0 ? (
//             <Box component="form" sx={{ mt: 2 }}>
//               <TextField label="Email" fullWidth margin="normal" />
//               <TextField label="Password" type="password" fullWidth margin="normal" />
//               <DialogActions>
//                 <Button onClick={handleAuthClose} color="secondary">Cancel</Button>
//                 <Button variant="contained" color="primary">Sign In</Button>
//               </DialogActions>
//             </Box>
//           ) : (
//             <Box component="form" sx={{ mt: 2 }}>
//               <TextField label="Full Name" fullWidth margin="normal" />
//               <TextField label="Email" fullWidth margin="normal" />
//               <TextField label="Password" type="password" fullWidth margin="normal" />
//               <DialogActions>
//                 <Button onClick={handleAuthClose} color="secondary">Cancel</Button>
//                 <Button variant="contained" color="primary">Sign Up</Button>
//               </DialogActions>
//             </Box>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }



// "use client";
// import { useState } from "react";
// import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   // Open & Close Modal
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="h6">User Management</Typography>

//           {/* ✅ Navigation Buttons */}
//           <div>
//             <Button href="/" color="inherit">Home</Button>
//             <Button href="/signin" color="inherit">Sign In</Button>
//             <Button href="/signup" color="inherit">Sign Up</Button>
//             <Button onClick={handleOpen} color="inherit">Contact</Button> {/* Opens the modal */}
//           </div>
//         </Toolbar>
//       </AppBar>

//       {/* ✅ Contact Form Modal */}
//       <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//         <DialogTitle>Contact Us</DialogTitle>
//         <DialogContent>
//           <TextField label="Name" fullWidth margin="dense" required />
//           <TextField label="Email" fullWidth margin="dense" required />
//           <TextField label="Message" fullWidth margin="dense" required multiline rows={4} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="secondary">Cancel</Button>
//           <Button onClick={() => { alert("Message Sent!"); handleClose(); }} variant="contained" color="primary">
//             Send Message
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }



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

  // Navbar Menu Handlers
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Contact Form Handlers
  const handleContactOpen = () => {
    setOpenContact(true);
  };
  const handleContactClose = () => {
    setOpenContact(false);
  };

  // Auth Form Handlers
  const handleAuthOpen = () => {
    setOpenAuth(true);
  };
  const handleAuthClose = () => {
    setOpenAuth(false);
  };

  // Tab Change Handler (Sign In & Sign Up)
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Form Handling
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

          {/* Mobile Menu */}
          <IconButton edge="end" color="inherit" onClick={handleMenuOpen} sx={{ display: { xs: "block", sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleAuthOpen}>Home</MenuItem>
            <MenuItem onClick={handleContactOpen}>Contact</MenuItem>
            <MenuItem component={Link} href="/users">Get Started</MenuItem>
          </Menu>

          {/* Desktop Navigation */}
          <Button color="inherit" onClick={handleAuthOpen}>Home</Button>
          <Button color="inherit" onClick={handleContactOpen}>Contact</Button>
          <Button color="inherit" component={Link} href="/users">Get Started</Button>
        </Toolbar>
      </AppBar>

      {/* Contact Form Dialog */}
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

      {/* Sign In & Sign Up Dialog */}
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