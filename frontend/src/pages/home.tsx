import {LoginButton, LogoutButton} from "../components/auth0"
import { useAuth0 } from "@auth0/auth0-react";


const Homepage = () => {

    const { isAuthenticated } = useAuth0();

    return <>
    <h1>homepage</h1>
    {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    <a href="/profile">Profile</a>
    </>
}

export default Homepage