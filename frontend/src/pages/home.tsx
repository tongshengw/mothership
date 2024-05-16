import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

import { GoogleLogin } from '@react-oauth/google';

const Homepage = () => {
    
    

    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        console.log(user.name)
    }
    return <>
    
    <h1>homepage</h1>
    <Link to='/profile'>Profile</Link>

    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </>
}

export default Homepage