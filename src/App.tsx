import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from './styles/AppTheme';

import { AppContext, IAppContext } from './data/AppContext';
import { NewsStore } from './data/news/NewsStore';
import { UserStore } from './data/auth/UserStore';
import LoginAppWrapper from './pages/LoginAppWrapper';
import { BusinessCardStore } from './data/businessCard/BusinessCardStore';
import { TagsStore } from './data/tags/TagsStore';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />

        <AppContext.Provider
          value={
            {
              businessCardStore: new BusinessCardStore(),
              newsStore: new NewsStore(),
              userStore: new UserStore(),
              tagsStore: new TagsStore(),
            } as IAppContext
          }
        >
          <LoginAppWrapper />
        </AppContext.Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
