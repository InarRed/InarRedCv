import React, { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { useLocation } from 'react-router-dom';
import LoginPart from './LoginPart';
import RegistrationPart from './RegistrationPart';

export interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  const location = useLocation();
  const from = ((location.state as any)?.from?.pathname as string) || '/';
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Box sx={style}>
        {isLogin ? (
          <LoginPart toRegistration={() => setIsLogin(false)} setIsOpen={setIsOpen} />
        ) : (
          <RegistrationPart toLogin={() => setIsLogin(true)} />
        )}
      </Box>
    </Modal>
  );
};

export default LoginModal;
