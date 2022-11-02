import React, { useContext, useState } from 'react';
import { Button, Dialog, DialogTitle, Typography } from '@mui/material';
import s from '../NewsPage.module.sass';
import { AppContext } from '../../../data/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export interface CreateDialogModalProps {
  open: boolean;
  onClose: () => void;
}

const PostCreationDialog = ({ open, onClose }: CreateDialogModalProps) => {
  const { newsStore } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleClose = () => {
    onClose();
  };
  const handleCreate = () => {
    newsStore
      .create()
      .then((value) => {
        navigate(value);
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) setErrorMessage(e.message);
        else throw e;
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create post?</DialogTitle>
      <div className={s.postCreationContainer}>
        {errorMessage && <Typography>{errorMessage}</Typography>}
        <Button className={s.leftButton} onClick={handleCreate}>
          Go to creation
        </Button>
        <Button className={s.rightButton} onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
};

export default PostCreationDialog;
