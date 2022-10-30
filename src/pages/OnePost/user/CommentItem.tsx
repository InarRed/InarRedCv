import React from 'react';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import { CommentListItemDto } from '../../../data/news/CommentDto';

interface CommentItemProps {
  comment: CommentListItemDto;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div>
      <Typography>{comment.user.username}</Typography>
      <Typography>{dayjs(comment.date).format('DD-MM-YYYY HH:mm')}</Typography>
      <Typography>{comment.text}</Typography>
    </div>
  );
};

export default CommentItem;
