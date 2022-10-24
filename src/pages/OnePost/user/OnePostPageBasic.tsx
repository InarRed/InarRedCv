import React from 'react';
import { Chip, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { OnePostDto } from '../../../data/news/PostDto';
import s from '../OnePostPage.module.sass';

interface OnePostPageBasicProps {
  post: OnePostDto;
}

const OnePostPageBasic = ({ post }: OnePostPageBasicProps) => {
  return (
    <div className={s.basicContainer}>
      <Typography variant='h5' fontWeight='600' className={s.heading}>
        {post.title}
      </Typography>
      <div className={s.tagsContainer}>
        {post.tags.map((t) => (
          <Chip key={t.id} label={t.name} />
        ))}
      </div>
      <ReactMarkdown>{post.contentPreview}</ReactMarkdown>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default OnePostPageBasic;
