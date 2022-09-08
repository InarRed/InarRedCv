import React, { useState } from 'react';
import './App.css';
import { Button, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { appTheme } from './styles/AppTheme';

function App() {
  const [num, setNum] = useState(0);

  const setNumber = () => {
    const cat = { name: 'Senya', age: 12 };
    console.log(cat);
    setNum(num + 1);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Button>Cat</Button>
      <Typography variant='h4'>
        Cascadia Code Italic asd
      </Typography>
      <Typography variant='body2'>{'Cascadia Code ---->'}</Typography>
    </ThemeProvider>
  );
}

export default App;
