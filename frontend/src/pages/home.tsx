import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import Header from "../components/header";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from "@mui/material";

const Homepage = () => {
    
    const theme = createTheme({
        palette: {
          primary: {
            light: '#757ce8',
            main: '#9881e8',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
        typography: {
            fontFamily: 'Fragment Mono',
        }
      });

    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        console.log(user.name)
    }
    return <>
    <ThemeProvider theme={theme}>
    <Header />
    <h1>homepage</h1>
    <Link to='/profile'>Profile</Link>
    </ThemeProvider>
    </>
}

export default Homepage