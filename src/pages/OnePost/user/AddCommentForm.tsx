import React, { useContext, useState } from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import s from '../OnePostPage.module.sass';
import { AppContext } from '../../../data/AppContext';
import { CommentListItemDto } from '../../../data/news/CommentDto';

interface AddCommentFormProps {
  addComment: (comment: CommentListItemDto) => void;
}

const AddCommentForm = ({ addComment }: AddCommentFormProps) => {
  const [text, setText] = useState('');
  const { newsStore } = useContext(AppContext);
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value.length < 1000) setText(event.target.value);
  };

  return (
    <div className={s.comment}>
      <TextField
        label='Add comment'
        multiline
        value={text}
        onChange={onChangeText}
        className={s.textField}
      />
      <Button variant='contained' color='secondary' className={s.sendButton}>
        <SendIcon />
      </Button>
    </div>
  );
};

export default AddCommentForm;
