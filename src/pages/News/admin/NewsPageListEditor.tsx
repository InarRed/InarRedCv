import React, { useContext, useState } from 'react';
import NewsPageLoader from '../NewsPageLoader';
import { Button } from '@mui/material';
import PostCreationDialog from './PostCreationDialog';
import { AppContext } from '../../../data/AppContext';

const NewsPageListEditor = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const onPostCreate = () => {
    setDialogOpen(true);
  };
  const onCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <div>
      <Button variant='contained' onClick={onPostCreate}>
        Add post
      </Button>
      <NewsPageLoader published={false} />
      <PostCreationDialog open={dialogOpen} onClose={onCloseDialog} />
    </div>
  );
};

export default NewsPageListEditor;
