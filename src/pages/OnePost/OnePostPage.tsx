import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../data/AppContext';
import { OnePostDto } from '../../data/news/PostDto';
import { LoadingValue, LoadingValueLoading } from '../../data/load/LoadedState';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import LoadingValueElement from '../../data/load/LoadingValueElement';

const OnePostPage = () => {
  const { newsStore } = useContext(AppContext);
  const [post, setPost] = useState<LoadingValue<OnePostDto>>(new LoadingValueLoading(null));
  const { id } = useParams();
  useEffect(() => {
    newsStore.getOnePost(Number(id), setPost);
  }, [id]);
  return (
    <LoadingValueElement
      state={post}
      loadedLayout={(value) => (
        <div>
          <Typography variant='h5' fontWeight='600'>
            {value.title}
          </Typography>
          <Typography>{value.contentPreview}</Typography>
          <Typography>{value.content}</Typography>
        </div>
      )}
    />
  );
};

export default OnePostPage;
