import React, { useContext, useState } from 'react';
import { Button, Card, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { CommentListItemDto } from '../../../../data/news/CommentDto';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import s from '../../OnePostPage.module.sass';
import { AppContext } from '../../../../data/AppContext';
import { OnePostContext } from '../../../../data/onePost/OnePostContext';
import CommentDeleteDialog from './CommentDeleteDialog';

interface CommentItemProps {
  comment: CommentListItemDto;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { userStore } = useContext(AppContext);
  const { onePostStore } = useContext(OnePostContext);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const onDelete = (accepted: boolean) => {
    if (accepted) {
      onePostStore.deleteComment(comment.id).then((m) => {
        if (!m.success) {
          alert(m.message);
        }
      });
    }
    setDialogIsOpen(false);
  };
  return (
    <>
      <Card className={s.comment}>
        <div className={s.userInfo}>
          <AccountBoxIcon fontSize='inherit' className={s.icon} />
          <div className={s.userInfoText}>
            <Typography fontWeight='600'>{comment.user.username}</Typography>
            <Typography variant='body2'>
              {dayjs(comment.date).format('DD-MM-YYYY HH:mm')}
            </Typography>
          </div>
          {(userStore.isAdmin || userStore.user.value?.id == comment.user.id) && (
            <Button onClick={() => setDialogIsOpen(true)} className={s.deleteButton}>
              Delete
            </Button>
          )}
        </div>

        <Typography className={s.text}>{comment.text}</Typography>
      </Card>
      <CommentDeleteDialog open={dialogIsOpen} onClose={onDelete} />
    </>
  );
};

export default CommentItem;
