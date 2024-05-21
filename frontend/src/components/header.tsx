import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useAuth0 } from '@auth0/auth0-react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import AuthButton from './auth0';

// const pages = ['Products'];
// const settings = ['profile', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { user,isAuthenticated, logout } = useAuth0()

  return (
    <AppBar position="static" sx={{borderRadius:'20px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* <Link style={{textDecoration:'none', color: 'white'}} to='/'>
            <div> */}
          <Link to='/' className='linkWhite'>
          <img src='../../public/white on transparent mothership logo.png' className='logo' ></img>
          </Link>
          
          <Link to='/' className='linkWhite'>
          <Typography
            variant="h6"
            noWrap
            component="a"
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
            Mothership
          </Typography>
          </Link>
          {/* </div>
          </Link> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
     


            {/* CHANGE HERE to change left side links when compressed */}
                <MenuItem key='App' onClick={handleCloseNavMenu}>
                    <Link to='/app' className='link'>
                        <Typography textAlign="center">App</Typography>
                    </Link>
                </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
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
            Mothership
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}

            {/* CHANGE HERE to change links on the left of the navbar */}
            <Link to='/app' className='link'>
            <Button
                key='App'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                App
            </Button>
            </Link>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            

            {isAuthenticated ? 
            <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.picture} />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link to={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))} */}

            {/* CHANGE HERE to change the right side of navbar */}
            <MenuItem>
            <Link to='/profile' className='link'>
                <Typography textAlign="center">Profile</Typography>
            </Link>
            </MenuItem>

            <MenuItem>
                <Typography textAlign="center" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Typography>
            
            </MenuItem>
              

            </Menu> 
            </>
            : <AuthButton />}
        
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;