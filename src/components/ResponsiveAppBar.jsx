import * as React from 'react' ;
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
import Logo from './logo.png';
import { Link } from 'react-router-dom';

const pages = [
  {
    label:"Home",
    route:"/",
  },
  {
    label:"Jobs",
    route:"/jobs",
  },
  {
    label:"Contact Us",
    route:"/contactus",
  },
  {
    label:"About Us",
    route:"/aboutus",
  },
  ]; 

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={Logo} alt="WIJ" />
          </Avatar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jobs-Japan
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
             
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label}>
                  <Link to ={page.route}>
                  <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={Logo} alt="WIJ" />
          </Avatar>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jobs-Japan
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: "center", display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to ={page.route}>
              <Button
                key={page.label}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: '600' }}
                >
                {page.label}
              </Button>
                </Link>
            ))}
          </Box>
        </Toolbar>
      </Container> 
    </AppBar>
  );
}

export default ResponsiveAppBar;
