import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import './index.css'

import { createTheme,ThemeProvider } from '@mui/material/styles';

const main=createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff6e00',
    },
    secondary: {
      main: '#5547ff',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={main}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
  // <React.StrictMode>
  //   <Auth0Provider
  //     domain='dev-r8j6u4wkoofpjezt.us.auth0.com'
  //     clientId='oWUv5wgxTS9H6lysFLHIqMOrPrQEo9w4'
  //     authorizationParams={{
  //       redirect_uri: 'http://localhost:5173/home',
  //     }}>
  //     <App />
  //   </Auth0Provider>
  // </React.StrictMode>
)
