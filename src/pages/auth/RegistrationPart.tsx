import React, { useContext, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import s from './LoginModal.module.sass';
import { AppContext } from '../../data/AppContext';
import { AuthMessageDto } from '../../data/auth/AuthDto';

interface RegistrationPartProps {
  toLogin: () => void;
}

const RegistrationPart = ({ toLogin }: RegistrationPartProps) => {
  const { userStore } = useContext(AppContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<AuthMessageDto | null>(null);
  const registration = () => {
    userStore.Registration({ username: userName, password: password }).then((value) => {
      setMessage(value);
    });
  };
  return (
    <div className={s.registrationContainer}>
      <div className={s.name}>
        <Typography variant='h5'>Registration</Typography>
        <Button onClick={toLogin}>to login</Button>
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
      <Button variant='contained' onClick={registration}>
        Registration
      </Button>
    </div>
  );
};

export default RegistrationPart;
