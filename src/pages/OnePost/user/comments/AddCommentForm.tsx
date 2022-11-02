import React, { useContext, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import s from '../../OnePostPage.module.sass';
import { CommentListItemDto } from '../../../../data/news/CommentDto';
import { OnePostContext } from '../../../../data/onePost/OnePostContext';
import { OnePostDto } from '../../../../data/news/PostDto';
import { InsertionDto } from '../../../../data/load/loadDtos';

interface AddCommentFormProps {
  post: OnePostDto;
}

const AddCommentForm = ({ post }: AddCommentFormProps) => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState<InsertionDto<CommentListItemDto> | null>(null);
  const { onePostStore } = useContext(OnePostContext);
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value.length < 1000) setText(event.target.value);
  };

  const onSend = () => {
    onePostStore.sendComment({ postId: post.id, text }).then((m) => {
      if (m.success) setText('');
      setMessage(m);
    });
  };

  return (
    <div className={s.comment}>
      <div className={s.sendContainer}>
        <TextField
          label='Add comment'
          multiline
          value={text}
          onChange={onChangeText}
          className={s.textField}
        />
        <Button variant='contained' color='secondary' className={s.sendButton} onClick={onSend}>
          <SendIcon />
        </Button>
      </div>
      {message && <Typography>{message.message}</Typography>}
    </div>
  );
};

export default AddCommentForm;
