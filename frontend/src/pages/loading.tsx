import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom'

const LoadingPage = () => {
    
    

    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
    if (isAuthenticated) {
        console.log("loading page auth confirmed")
        return <Navigate to="/app" />;
    }
    
    if (!isAuthenticated) {
        return <button onClick={() => loginWithRedirect()}>Log in</button>;
    }

    return null;
}

export default LoadingPage;