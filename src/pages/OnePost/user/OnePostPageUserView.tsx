import React from 'react';
import { Chip, Divider, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { OnePostDto } from '../../../data/news/PostDto';
import s from '../OnePostPage.module.sass';
import { observer } from 'mobx-react-lite';
import OnePostComments from './comments/OnePostComments';

interface OnePostPageBasicProps {
  post: OnePostDto;
}

const OnePostPageUserView = observer(({ post }: OnePostPageBasicProps) => {
  return (
    <div className={s.postBasicContainer}>
      <Typography variant='h5' fontWeight='600' className={s.heading}>
        {post.title}
      </Typography>
      <div className={s.tagsContainer}>
        {post.tags.map((t) => (
          <Chip key={t.id} label={t.name} />
        ))}
      </div>
      <ReactMarkdown className={s.markdown}>{post.contentPreview}</ReactMarkdown>
      <ReactMarkdown className={s.markdown}>{post.content}</ReactMarkdown>
      <Divider />
      <OnePostComments post={post} />
    </div>
  );
});

export default OnePostPageUserView;
