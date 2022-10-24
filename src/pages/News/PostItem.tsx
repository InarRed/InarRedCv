import React from 'react';
import { BorderedCard } from '../../components/BorderedCard/BorderedCard';
import { PostListItemDto } from '../../data/news/PostDto';
import { Chip, Typography, useTheme } from '@mui/material';
import s from './PostItem.module.sass';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface PostItemProps {
  post: PostListItemDto;
}

const PostItem = ({ post }: PostItemProps) => {
  const theme = useTheme();
  return (
    <BorderedCard className={s.wrapper}>
      <Link
        to={`/news/post/${post.id}`}
        className={s.heading}
        style={{ color: theme.palette.text.primary }}
      >
        <Typography variant='h5' fontWeight='600'>
          {post.title}
        </Typography>
      </Link>

      <Typography variant='body2' className={s.date}>
        {dayjs(post.date).format('DD-MM-YYYY  hh:mm')}
      </Typography>
      <ReactMarkdown className={s.contentPreview}>{post.contentPreview}</ReactMarkdown>
      <div className={s.tagsContainer}>
        {post.tags.map((t) => (
          <Chip key={t.id} label={t.name} />
        ))}
      </div>
    </BorderedCard>
  );
};

export default PostItem;
