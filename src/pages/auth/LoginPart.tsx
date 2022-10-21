import React, { useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import s from './LoginModal.module.sass';
import { AppContext } from '../../data/AppContext';
import { AuthMessageDto } from '../../data/auth/AuthDto';

interface LoginPartProps {
  toRegistration: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

const LoginPart = ({ toRegistration, setIsOpen }: LoginPartProps) => {
  const { userStore } = useContext(AppContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<AuthMessageDto | null>(null);

  const login = () => {
    userStore.Login({ username: userName, password: password }).then((value) => {
      setMessage(value);
      if (value.successful) setIsOpen(false);
    });
  };

  return (
    <Box className={s.loginContainer}>
      <div className={s.name}>
        <Typography variant='h5'>Login</Typography>
        <Button onClick={toRegistration}>to registration</Button>
      </div>
      <TextField
        label='Username'
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <TextField
        label='Password'
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {message && <Typography>{message.message}</Typography>}
      <Button variant='contained' onClick={login}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPart;
