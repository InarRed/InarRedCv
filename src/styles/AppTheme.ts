import { createTheme, ThemeOptions } from '@mui/material';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff9100',
    },
    secondary: {
      main: '#9c27b0',
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: 'Cascadia Code',
    button: {
      fontWeight: 600,
    },
  },
};

export const appTheme = createTheme(themeOptions);
