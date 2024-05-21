import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

const IntroPage = () => {
    
    

    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        console.log(user.name)
    }
    return <>
    
    <h1>Intro</h1>
    <Link to='/profile'>Profile</Link>
 
    </>
}

export default IntroPage