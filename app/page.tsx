// 'use client';
// import Link from "next/link";
// import { Button, Container, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";

// export default function Home() {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <AppBar position="static" color="primary" sx={{ width: "100%" }}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             User Management
//           </Typography>
//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             sx={{ display: { xs: "block", sm: "none" } }}
//             onClick={handleMenuOpen}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//             sx={{ display: { xs: "block", sm: "none" } }}
//           >
//             <MenuItem component={Link} href="/" onClick={handleMenuClose}>
//               Home
//             </MenuItem>
//             <MenuItem component={Link} href="/contact" onClick={handleMenuClose}>
//               Contact
//             </MenuItem>
//             <MenuItem component={Link} href="/get-started" onClick={handleMenuClose}>
//               Get Started
//             </MenuItem>
//           </Menu>
//           <Button color="inherit" component={Link} href="/" sx={{ display: { xs: "none", sm: "block" } }}>
//             Home
//           </Button>
//           <Button color="inherit" component={Link} href="/contact" sx={{ display: { xs: "none", sm: "block" } }}>
//             Contact
//           </Button>
//           <Button color="inherit" component={Link} href="/get-started" sx={{ display: { xs: "none", sm: "block" } }}>
//             Get Started
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Container maxWidth="xl" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//         <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, textAlign: "center" }}>
//           Welcome to User Management
//         </Typography>
//         <Button component={Link} href="/users" variant="contained" sx={{ width: { xs: "100%", sm: "auto" }, mt: 2 }}>
//           Go to Users
//         </Button>
//       </Container>
//     </>
//   );
// }

'use client';
import Link from "next/link";
import { useState } from "react";
import { Button, Container, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openContact, setOpenContact] = useState(false);
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
      <AppBar position="static" color="primary" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            User Management
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuItem component={Link} href="/" onClick={handleMenuClose}>
              Home
            </MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); handleContactOpen(); }}>
              Contact
            </MenuItem>
            <MenuItem component={Link} href="/get-started" onClick={handleMenuClose}>
              Get Started
            </MenuItem>
          </Menu>
          <Button color="inherit" component={Link} href="/" sx={{ display: { xs: "none", sm: "block" } }}>
            Home
          </Button>
          <Button color="inherit" onClick={handleContactOpen} sx={{ display: { xs: "none", sm: "block" } }}>
            Contact
          </Button>
          <Button color="inherit" component={Link} href="/get-started" sx={{ display: { xs: "none", sm: "block" } }}>
            Get Started
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, textAlign: "center" }}>
          Welcome to User Management
        </Typography>
        <Button component={Link} href="/users" variant="contained" sx={{ width: { xs: "100%", sm: "auto" }, mt: 2 }}>
          Go to Users
        </Button>
      </Container>

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
    </>
  );
}
