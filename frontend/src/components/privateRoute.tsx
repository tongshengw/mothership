import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ Component }) => {

const {isAuthenticated} = useAuth0();

if (isAuthenticated === true) {
    console.log("auth")
} else {
    console.log("auth failed")
}
 
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;