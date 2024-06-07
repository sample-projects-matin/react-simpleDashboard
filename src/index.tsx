import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <SnackbarProvider maxSnack={2} preventDuplicate>
      <Router>
        <App />
      </Router>
    </SnackbarProvider>
  </React.StrictMode>
);
