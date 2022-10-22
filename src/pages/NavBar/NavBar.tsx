import React, { useContext, useState } from 'react';
import { AppBar, Button, CircularProgress, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
  const [tab, setTab] = useState('cv');
  const handleSetTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
    switch (newValue) {
      case 'cv':
        navigate('');
        break;
      case 'news':
        navigate('/news');
        break;
    }
  };
  return (
    <div>
      <AppBar variant='elevation' position='static'>
        <Toolbar variant='dense'>
          <Typography sx={{ margin: 'auto 20px', fontStyle: 'italic' }}>InarCV</Typography>
          <Tabs value={tab} onChange={handleSetTab}>
            <Tab value='cv' label='cv' />
            <Tab value='news' label='News' />
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
                <Button onClick={handleLogout}>LogOut</Button>
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
