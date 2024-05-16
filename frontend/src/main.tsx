import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Auth0Provider
    domain="dev-31cpu1sd5l2yxxp4.us.auth0.com"
    clientId="o7GzCbuNublBqCa3XDLBWpgObuiTJsDG"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
  >
    <App />

    </Auth0Provider>

  </React.StrictMode>,
)
