import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from './styles/AppTheme';
import BasicLayout from './pages/BasicLayout';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BasicLayout />
    </ThemeProvider>
  );
}

export default App;
