import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';

function GoogleAuth() {
    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
      });
      
      return <Button variant='contained' onClick={() => login()}>Sign in with Google 🚀</Button>;
}

export default GoogleAuth;