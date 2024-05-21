import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Profile from './components/profile';
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import Header from './components/header';
import PrivateRoute from './components/privateRoute';
import IntroPage from './pages/intro';
import { Navigate } from 'react-router-dom';
import LoadingPage from './pages/loading';

const App: React.FC = () => {

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

  return (
    <>
    <Router>
      
        <ThemeProvider theme={theme}>
            <Header />
        </ThemeProvider>

      <Routes>

        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<LoadingPage />} />

        {/* Private Routes */}
        <Route path="/profile" element={<PrivateRoute Component={Profile} />} />
        <Route path="/app" element={<PrivateRoute Component={Homepage}/>} />

      </Routes>
    </Router>
    </>
  );
};

export default App;
