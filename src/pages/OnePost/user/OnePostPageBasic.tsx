import React from 'react';
import { Chip, Divider, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { OnePostDto } from '../../../data/news/PostDto';
import s from '../OnePostPage.module.sass';
import CommentItem from './CommentItem';

interface OnePostPageBasicProps {
  post: OnePostDto;
}

const OnePostPageBasic = ({ post }: OnePostPageBasicProps) => {
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
      <ReactMarkdown>{post.contentPreview}</ReactMarkdown>
      <ReactMarkdown className={s.markdown}>{post.content}</ReactMarkdown>
      <Divider />
      {post.comments.map((c) => (
        <CommentItem comment={c} key={c.id} />
      ))}
    </div>
  );
};

export default OnePostPageBasic;
