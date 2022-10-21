import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from './styles/AppTheme';

import { AppContext, IAppContext } from './data/AppContext';
import { NewsStore } from './data/news/NewsStore';
import { UserStore } from './data/auth/UserStore';
import LoginAppWrapper from './pages/LoginAppWrapper';
import { BusinessCardStore } from './data/businessCard/BusinessCardStore';

function App() {
  console.log('Debug!');
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppContext.Provider
        value={
          {
            businessCardStore: new BusinessCardStore(),
            newsStore: new NewsStore(),
            userStore: new UserStore(),
          } as IAppContext
        }
      >
        <LoginAppWrapper />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
