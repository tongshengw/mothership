import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from '@auth0/auth0-react';

import AuthButton from './auth0';

export default function Header() {

    const { user, isAuthenticated } = useAuth0()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" sx={{ borderRadius: '20px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mothership
          </Typography>
        
        {isAuthenticated ? <Typography>{user.name}</Typography> : <span></span>}
        
        <AuthButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}