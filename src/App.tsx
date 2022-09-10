import React, { useState } from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from './styles/AppTheme';
import BasicLayout from './pages/BasicLayout';
import BusinessCardDto from './data/dtos/BusinessCardDto';
import { AppContext, IAppContext } from './data/BusinessCardContext';

function App() {
  const [businessCard, setBusinessCard] = useState<BusinessCardDto | null>(null);
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppContext.Provider
        value={
          {
            card: businessCard,
            setCard: setBusinessCard,
          } as IAppContext
        }
      >
        <BasicLayout />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
