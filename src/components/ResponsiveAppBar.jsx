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
              <img src={"data:image/jpeg;base64,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"} alt="WIJ" />
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
