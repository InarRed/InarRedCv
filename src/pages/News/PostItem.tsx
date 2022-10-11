import React from 'react';
import { BorderedCard } from '../../components/BorderedCard/BorderedCard';
import { PostListItemDto } from '../../data/dtos/PostDto';
import { Typography } from '@mui/material';
import s from './PostItem.module.sass';
import dayjs from 'dayjs';

interface PostItemProps {
  post: PostListItemDto;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <BorderedCard className={s.wrapper}>
      <Typography variant='h5' fontWeight='600'>
        {post.title}
      </Typography>
      <Typography variant='body2' className={s.date}>
        {dayjs(post.date).format('DD-MM-YYYY  hh:mm')}
      </Typography>
      <div className={s.tagsContainer}>
        {post.tags.map((t) => (
          <Typography key={t.id} variant='body2' sx={{ margin: 'auto 8px' }}>
            {'#' + t.name}
          </Typography>
        ))}
      </div>
      <Typography variant='body1' className={s.contentPreview}>
        {post.contentPreview}
      </Typography>
    </BorderedCard>
  );
};

export default PostItem;
