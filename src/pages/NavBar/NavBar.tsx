import React, { useContext, useState } from 'react';
import { AppBar, Button, CircularProgress, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './NavBar.module.sass';
import LoginModal from '../auth/LoginModal';
import { AppContext } from '../../data/AppContext';
import { observer } from 'mobx-react-lite';
import { LoadingValueError, LoadingValueState } from '../../data/load/LoadedState';
import { UserDto } from '../../data/auth/AuthDto';

const NavBar = observer(() => {
  const { userStore } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const handleLogin = () => {
    setModalOpen(true);
  };
  const handleLogout = () => {
    userStore.logout();
  };

  const navigate = useNavigate();
  const location = useLocation();
  const handleSetTab = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };
  return (
    <div>
      <AppBar variant='elevation' position='static'>
        <Toolbar variant='dense'>
          <Typography sx={{ margin: 'auto 20px', fontStyle: 'italic' }}>InarCV</Typography>
          <Tabs value={location.pathname} onChange={handleSetTab}>
            <Tab value='/' label='cv' />
            <Tab value='/news' label='News' />
          </Tabs>
          <div className={s.centerSpace} />
          <div className={s.rightNavContainer}>
            {userStore.user.state == LoadingValueState.Loading && <CircularProgress />}
            {userStore.user.state == LoadingValueState.Loaded && userStore.user.value == null && (
              <Button onClick={handleLogin}>Login</Button>
            )}
            {userStore.user.state == LoadingValueState.Loaded && userStore.user.value != null && (
              <div className={s.innerContainer}>
                <Typography>{`Hello, ${userStore.user.value.username}`}</Typography>
                <Button onClick={handleLogout} variant='outlined'>
                  LogOut
                </Button>
              </div>
            )}
            {userStore.user.state == LoadingValueState.Error && (
              <Typography>{`Error: ${
                (userStore.user as LoadingValueError<UserDto>).message
              }`}</Typography>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <LoginModal isOpen={modalOpen} setIsOpen={(open) => setModalOpen(open)} />
    </div>
  );
});

export default NavBar;
