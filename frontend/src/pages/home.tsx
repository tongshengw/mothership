import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import GoogleAuth from "../components/googleauth";

const Homepage = () => {
    
    

    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        console.log("logged in as " + user.name)
    }
    return <>
    
    <h1>homepage</h1>
    <Link to='/profile'>Profile</Link>

    <GoogleAuth />
 
    </>
}

export default Homepage