import React from 'react';
import { Button, Dialog, DialogTitle } from '@mui/material';
import s from '../../OnePostPage.module.sass';

interface CommentDeleteDialog {
  open: boolean;
  onClose: (accepted: boolean) => void;
}

const CommentDeleteDialog = ({ open, onClose }: CommentDeleteDialog) => {
  const handleCancel = () => {
    onClose(false);
  };
  const handleAccept = () => {
    onClose(true);
  };
  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>Delete comment</DialogTitle>
      <div className={s.commentDeleteContainer}>
        <Button className={s.leftButton} onClick={handleAccept}>
          Delete
        </Button>
        <Button className={s.rightButton} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
};

export default CommentDeleteDialog;
