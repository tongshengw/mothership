import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Auth0Provider
    domain="dev-31cpu1sd5l2yxxp4.us.auth0.com"
    clientId="o7GzCbuNublBqCa3XDLBWpgObuiTJsDG"
    useRefreshTokens={true}
    cacheLocation="localstorage"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/login"
    }}
  >

    <GoogleOAuthProvider clientId="864844663146-jl7ql4ibern52jq2bfks1lq0icd2i383.apps.googleusercontent.com">
    
    <App />

    </GoogleOAuthProvider>


    </Auth0Provider>

  </React.StrictMode>,
)
