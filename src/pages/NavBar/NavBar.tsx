import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar variant='elevation' position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Inar cv
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
