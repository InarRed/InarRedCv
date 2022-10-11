import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('cv');
  const handleSetTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
    switch (newValue) {
      case 'cv':
        navigate('/');
        break;
      case 'news':
        navigate('/news');
        break;
    }
  };
  return (
    <AppBar variant='elevation' position='static'>
      <Toolbar variant='dense'>
        <Typography sx={{ margin: 'auto 20px', fontStyle: 'italic' }}>InarCV</Typography>
        <Tabs value={tab} onChange={handleSetTab}>
          <Tab value='cv' label='cv' />
          <Tab value='news' label='News' />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
