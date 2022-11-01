import React, { useContext, useState } from 'react';
import { OnePostDto } from '../../../../data/news/PostDto';
import s from '../../OnePostPage.module.sass';
import CommentItem from './CommentItem';
import AddCommentForm from './AddCommentForm';
import { AppContext } from '../../../../data/AppContext';
import { observer } from 'mobx-react-lite';
import { OnePostContext } from '../../../../data/onePost/OnePostContext';
import CommentDeleteDialog from './CommentDeleteDialog';
import { CommentListItemDto } from '../../../../data/news/CommentDto';

interface OnPostCommentsProps {
  post: OnePostDto;
}

const OnePostComments = observer(({ post }: OnPostCommentsProps) => {
  const { userStore } = useContext(AppContext);
  return (
    <>
      {post.comments.map((c) => (
        <CommentItem comment={c} key={c.id} />
      ))}
      {userStore.isUser && <AddCommentForm post={post} />}
    </>
  );
});

export default OnePostComments;
