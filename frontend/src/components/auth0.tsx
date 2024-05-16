import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const AuthButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  if (isAuthenticated) {
    return <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} color="inherit">Logout</Button>
  } else {
    return <Button onClick={() => loginWithRedirect()} color="inherit">Login to mothership</Button>;
  }

}

export default AuthButton