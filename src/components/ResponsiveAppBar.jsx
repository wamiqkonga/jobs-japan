import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link , useLocation } from 'react-router-dom';
import bg from "../assets/logo.png"

const pages = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Jobs",
    route: "/jobs",
  },
  {
    label: "Contact Us",
    route: "/contactus",
  },
  {
    label: "About Japan",
    route: "/aboutjapan",
  },
];

function ResponsiveAppBar() {

  const location = useLocation();

  const isCurrentRoute = (route) => {
    return location.pathname === route;
  };
   
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              <img src = {bg} alt="WIJ" />
            </Avatar>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color:"wheat",
                textDecoration: 'none',
              }}
            >
              Jobs-Japan
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenuOpen}
              sx={{ display: { xs: 'block', md: 'none' } , marginLeft:"65px" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
             id="menu-appbar"
             
             open={menuOpen}
             onClose={handleMenuClose}
             anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
             transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
            >
              
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleMenuClose}>
                  <Link to={page.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.route}
                sx={{ mx: 1, color: isCurrentRoute(page.route) ? 'black' : 'inherit', fontWeight: '600' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
