import React from 'react';
import { Button, Dialog, DialogTitle, Typography } from '@mui/material';
import s from './YesNoDialog.module.sass';
import { SuccessMessageDto } from '../../data/load/loadDtos';

interface YesNoDialogProps {
  title: string;
  yesText?: string;
  noText?: string;
  message?: SuccessMessageDto;
  open: boolean;
  onClose: (yes: boolean | undefined) => void;
}

const YesNoDialog = ({ title, yesText, noText, message, open, onClose }: YesNoDialogProps) => {
  const handleClose = () => {
    onClose(undefined);
  };
  const handleNo = () => {
    onClose(false);
  };
  const handleYes = () => {
    onClose(true);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <div className={s.yesNoButtonsContainer}>
        {message && <Typography className={s.message}>{message.message}</Typography>}
        <Button className={s.leftButton} onClick={handleYes}>
          {yesText ? yesText : 'Yes'}
        </Button>
        <Button className={s.rightButton} onClick={handleNo}>
          {noText ? noText : 'No'}
        </Button>
      </div>
    </Dialog>
  );
};

export default YesNoDialog;
